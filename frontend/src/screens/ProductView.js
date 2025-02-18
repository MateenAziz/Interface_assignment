import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const token = localStorage.getItem("access_token");
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/products/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Box sx={{ p: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="h6" color="secondary.main">
            {product.category}
          </Typography>
          <Typography variant="body2" component="div">
            Record count: {product.record_count}
          </Typography>
          <Typography variant="body2" component="div">
            Fields: {product.fields}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductView;
