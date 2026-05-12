// Componente Line atualizado
import { Box } from "@mui/material";

const Line = () => {
  return (
    <Box
      sx={{
        height: '40px', // Altura aumentada para alcançar a date_box
        width: "2.5px",
        transform: "rotate(60deg)", 
        borderRadius: 20,
        backgroundColor: "#fff",
        // marginTop: '-5px', // Pequeno ajuste para conectar com a estrela
        marginBottom: '7px'
      }}
    />
  );
};

export default Line;