export default function handler(req, res) {
  const { nota1, nota2, nota3 } = req.query;

  const promedio = ((+nota1 + +nota2 + +nota3) / 3).toFixed(2);
  const estado = promedio >= 11 ? "Aprobado" : "Desaprobado";

  res.status(200).json({
    promedio,
    estado,
    fecha: new Date().toLocaleString(),
  });
}
