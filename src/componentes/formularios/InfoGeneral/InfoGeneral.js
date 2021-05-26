import { Chart } from "react-google-charts";

export default function InfoGeneral() {

    const data = [
        ["Task", "Hours per Day"],
        ["Vencidos", 11],
        ["Vencen hoy", 2],
        ["Vencen después", 5],
      ];
      const options = {
        title: "Requerimientos por atender",
        pieHole: 0.4,
        is3D: true
      };

    const data2 = [
        ["Task", "Hours per Day"],
        ["Crear usuario", 11],
        ["Instalar impresora", 2],
        ["Modificar Sistema", 2],
        ["Instalar antivirus", 2],
        ["Elaborar reporte", 7] // CSS-style declaration
      ];
      const options2 = {
        title: "Actividades por atender",
        pieHole: 0.4,
        is3D: true
      };

      const data3 = [
        ["Task", "Hours per Day"],
        ["Incidente Mayor", 1],
        ["Incidente", 3],
        ["Solicitud", 12],
      ];
      const options3 = {
        title: "Requerimientos pendientes por Categoria",
        pieHole: 0.4,
        is3D: true
      };

      const data4 = [
        ["Task", "Hours per Day"],
        ["Urgente", 4],
        ["Alta", 5],
        ["Media", 2],
        ["Baja", 1],
      ];
      const options4 = {
        title: "Requerimientos pendientes por prioridad",
        pieHole: 0.4,
        is3D: true
      };

    return (
        <div>
            <div className="animate__animated animate__zoomInDown">
                <div className="">
                    <h5 className="">Información General</h5>
                    <hr/>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                  <Chart
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="Line"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            [
                                            'Día',
                                            'Mes actual',
                                            'Mes anterior',
                                            'Dos Meses atrás',
                                            ],
                                            [1, 37.8, 80.8, 41.8],
                                            [2, 30.9, 69.5, 32.4],
                                            [3, 25.4, 57, 25.7],
                                            [4, 11.7, 18.8, 10.5],
                                            [5, 11.9, 17.6, 10.4],
                                            [6, 8.8, 13.6, 7.7],
                                            [7, 7.6, 12.3, 9.6],
                                            [8, 12.3, 29.2, 10.6],
                                            [9, 16.9, 42.9, 14.8],
                                            [10, 12.8, 30.9, 11.6],
                                            [11, 5.3, 7.9, 4.7],
                                            [12, 6.6, 8.4, 5.2],
                                            [13, 4.8, 6.3, 3.6],
                                            [14, 4.2, 6.2, 3.4],
                                        ]}
                                        options={{
                                            chart: {
                                            title: 'Efectividad en atención de requerimientos',
                                            subtitle: 'últimos 3 meses',
                                            },
                                        }}
                                        rootProps={{ 'data-testid': '3' }}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                <Chart
                                    width={'550px'}
                                    height={'350px'}
                                    chartType="LineChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['x', 'Requerimientos'],
                                        [0, 0],
                                        [1, 10],
                                        [2, 23],
                                        [3, 17],
                                        [4, 18],
                                        [5, 9],
                                        [6, 11],
                                        [7, 27],
                                        [8, 33],
                                        [9, 40],
                                        [10, 32],
                                        [11, 35],
                                    ]}
                                    options={{
                                        hAxis: {
                                        title: 'Ultimos meses',
                                        },
                                        vAxis: {
                                        title: 'Cantidad',
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                  <Chart
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="Line"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            [
                                            'Día',
                                            'Mes actual',
                                            'Mes anterior',
                                            'Dos Meses atrás',
                                            ],
                                            [1, 37.8, 80.8, 41.8],
                                            [2, 30.9, 69.5, 32.4],
                                            [3, 25.4, 57, 25.7],
                                            [4, 11.7, 18.8, 10.5],
                                            [5, 11.9, 17.6, 10.4],
                                            [6, 8.8, 13.6, 7.7],
                                            [7, 7.6, 12.3, 9.6],
                                            [8, 12.3, 29.2, 10.6],
                                            [9, 16.9, 42.9, 14.8],
                                            [10, 12.8, 30.9, 11.6],
                                            [11, 5.3, 7.9, 4.7],
                                            [12, 6.6, 8.4, 5.2],
                                            [13, 4.8, 6.3, 3.6],
                                            [14, 4.2, 6.2, 3.4],
                                        ]}
                                        options={{
                                            chart: {
                                            title: 'Efectividad en atención de requerimientos',
                                            subtitle: 'últimos 3 meses',
                                            },
                                        }}
                                        rootProps={{ 'data-testid': '3' }}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                  <Chart
                                        width={'500px'}
                                        height={'300px'}
                                        chartType="ComboChart"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            [
                                            'Mes',
                                            'Juan Perez',
                                            'Maria Colmenarez',
                                            'Rodrigo Cardoza',
                                            'Raquel Suarez',
                                            'Juan Carmona',
                                            'Average',
                                            ],
                                            ['2004/05', 165, 938, 522, 998, 450, 614.6],
                                            ['2005/06', 135, 1120, 599, 1268, 288, 682],
                                            ['2006/07', 157, 1167, 587, 807, 397, 623],
                                            ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                                            ['2008/09', 136, 691, 629, 1026, 366, 569.6],
                                        ]}
                                        options={{
                                            title: 'Requerimientos pendientes por responsable',
                                            vAxis: { title: 'Requerimientos' },
                                            hAxis: { title: 'Mes' },
                                            seriesType: 'bars',
                                            series: { 5: { type: 'line' } },
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="400px"
                                        data={data}
                                        options={options}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="400px"
                                        data={data2}
                                        options={options2}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="400px"
                                        data={data3}
                                        options={options3}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="400px"
                                        data={data4}
                                        options={options4}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <table class="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col" colSpan="2">Resumen de Requerimientos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="/listapendientes">Pendientes</a></td>
                                                <td>3</td>
                                            </tr>

                                            <tr>
                                                <td><a href="/listasolicitadoss">Solicitados</a></td>
                                                <td>2</td>
                                            </tr>
                                            <tr>
                                                <td><a href="/listaborradores">Borradores</a></td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-1">
                            </div>
                            <div className="col">
                                <div className="row">
                                    <table class="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col" colSpan="2">Atención de Requerimientos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Vencidos</td>
                                                <td><span class="badge bg-danger">2</span></td>
                                            </tr>
                                            <tr>
                                                <td>Vencen hoy</td>
                                                <td><span class="badge bg-warning text-dark">0</span></td>
                                            </tr>
                                            <tr>
                                                <td>Vencen después</td>
                                                <td><span class="badge bg-success">1</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <br/><br/>
                        </div>
                        <div className="row">
                            <div>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className=""><h6>Mensajes</h6></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table class="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Remitente</th>
                                            <th scope="col">Asunto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jefe de Unidad</td>
                                            <td>Reporte mensual</td>
                                        </tr>

                                        <tr>
                                            <td>Gerente de zona</td>
                                            <td>Informacion sobre requerimiento 231233</td>
                                        </tr>
                                        <tr>
                                            <td>Jefe de Sistemas</td>
                                            <td>Informacion sobre actividad</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

