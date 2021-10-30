import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import logo from "../../assets/logo.jpg";

const projects = [
  {
    id: 1,
    name: "Sl AppXperts",
    logo,
    des: "This is the sl appXperts web site. This also a our creation. You can see nice animations too from this website",
  },
  {
    id: 2,
    name: "Chat App",
    logo,
    des: "This is a chat app we create with react and firebase",
  },
];

export default function OurProjects() {
  return (
    <div className="section">
      <h1> Our Projects </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {projects.map((pro) => (
          <Card style={{ margin: "10px" }} key={pro.id} sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="194"
              image={pro.logo}
              alt={pro.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {" "}
                {pro.des}{" "}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
