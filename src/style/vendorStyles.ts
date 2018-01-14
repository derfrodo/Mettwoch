import "rc-slider/assets/index.css";

// bootstrap is always right and will overwrite settings by other vendors...
if (process.env.NODE_ENV === "production") {
    require("./../../node_modules/bootstrap/dist/css/bootstrap.min.css");
} else {
    require("./../../node_modules/bootstrap/dist/css/bootstrap.css");
}