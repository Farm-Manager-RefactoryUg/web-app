    <Grid
      container
      spacing={4}
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Grid item xs={12} md={6} lg={6}>
        <Card
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgba(0, 0, 0, 0.87)",
          }}
        >
          <CardContent style={{ paddingBottom: "8px" }}>
            <Typography
              gutterBottom
              component="h6"
              style={{
                fontFamily: "Segoe UI",
                padding: "0",
                fontWeight: "600",
                fontSize: "1.0625rem",
              }}
            >
              3
              <IconButton
                title="Delete Dashboard"
                color="primary"
                aria-label="upload picture"
                component="span"
                style={{
                  margin: "0",
                  padding: "0",
                  float: "right",
                }}
              >
                <DeleteIcon
                  style={{
                    color: "green",
                    transform: "scale(0.7)",
                  }}
                />
              </IconButton>
            </Typography>
            <Chip
              classes={{ label: classes.label }}
              style={{
                fontFamily: "Segoe UI",
                backgroundColor: "teal",
              }}
              label="Finished"
              size="small"
            />
            <Typography
              style={{
                fontFamily: "Segoe UI",
                padding: "0px",
                paddingTop: "10px",
                color: "rgba(0, 0, 0, 0.87)",
                fontSize: "0.875rem",
              }}
            >
              {
                "If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."
              }
              <Divider
                style={{
                  marginTop: "20px",
                  marginBottom: "8px",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                }}
              />
              <Button
                color="primary"
                style={{
                  fontSize: "0.8125rem",
                  textTransform: "lowercase",
                  width: "100%",
                  color: "green",
                }}
                component={Link}
                to={"/dashboard"}
              >
                View
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <Card
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgba(0, 0, 0, 0.87)",
          }}
        >
          <CardContent style={{ paddingBottom: "8px" }}>
            <Typography
              gutterBottom
              component="h6"
              style={{
                fontFamily: "Segoe UI",
                padding: "0",
                fontWeight: "600",
                fontSize: "1.0625rem",
              }}
            >
              4
              <IconButton
                title="Delete Dashboard"
                color="primary"
                aria-label="upload picture"
                component="span"
                style={{
                  margin: "0",
                  padding: "0",
                  float: "right",
                }}
              >
                <DeleteIcon
                  style={{
                    color: "green",
                    transform: "scale(0.7)",
                  }}
                />
              </IconButton>
            </Typography>
            <Chip
              classes={{ label: classes.label }}
              style={{
                fontFamily: "Segoe UI",
                backgroundColor: "orange",
              }}
              label="In Progress"
              size="small"
            />
            <Typography
              style={{
                fontFamily: "Segoe UI",
                padding: "0px",
                paddingTop: "10px",
                color: "rgba(0, 0, 0, 0.87)",
                fontSize: "0.875rem",
              }}
            >
              {
                "If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."
              }
              <Divider
                style={{
                  marginTop: "20px",
                  marginBottom: "8px",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                }}
              />
              <Button
                color="primary"
                style={{
                  fontSize: "0.8125rem",
                  textTransform: "lowercase",
                  width: "100%",
                  color: "green",
                }}
                component={Link}
                to={"/dashboard"}
              >
                View
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>;
                