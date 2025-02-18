import React, { useState } from "react";
import Card from "@mui/material/Card";
import {
  AppBar,
  Box,
  CardContent,
  CardMedia,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Box>
      <Card sx={{ p: "10px", borderRadius: "20px" }}>
        <Link
          to={`/products/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ color: "primary.main" }}
              component="div"
            >
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ margin: "10px 0 !important", color: "secondary.main" }}
            >
              <strong>{product.category}</strong>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "primary.input",
              }}
              component="div"
            >
              Records count: <strong>{product.record_count}</strong>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                margin: "10px 0 !important",
              }}
              component="div"
            >
              <strong>Fields:</strong> {product.fields}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Box>
  );
}

export default ProductCard;
