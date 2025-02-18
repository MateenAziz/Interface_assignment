import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  AppBar,
  Box,
  Button,
  Grid2,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import Message from "../components/Message";

function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // Filter logic
  const filteredDatasets = products.filter((ds) => {
    const matchesSearch = ds.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || ds.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("access_token");
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/products/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {error && <Message severity={"error"}>Error: {error.message}</Message>};
      <Box>
        <Box size={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Data Catalog
              </Typography>
              {/* Search Field */}
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search datasets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  marginRight: 1,
                }}
              />
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>

              {/* Category Filter */}
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                displayEmpty
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  marginLeft: 2,
                }}
              >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="Sales">Sales</MenuItem>
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Inventory">Inventory</MenuItem>
              </Select>
              <IconButton color="inherit">
                <FilterListIcon />
              </IconButton>
              <Button color="white" onClick={handleLogout}>
                LOG OUT
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Grid2 container sx={{ p: "10px" }} spacing={2}>
          {filteredDatasets.map((product, index) => (
            <Grid2 key={index} size={{ xs: 6, md: 3 }}>
              <ProductCard product={product}></ProductCard>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
}

export default ProductList;
