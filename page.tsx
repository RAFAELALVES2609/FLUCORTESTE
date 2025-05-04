"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Download, FileText, BarChart3, Database, Beaker, Gauge, FileIcon as FilePdf } from "lucide-react"

export default function Relatorios() {
  const { toast } = useToast()
  const [dataInicio, setDataInicio] = useState(new Date().toISOString().split("T")[0])
  const [dataFim, setDataFim] = useState(new Date().toISOString().split("T")[0])
  const [tipoRelatorio, setTipoRelatorio] = useState("movimentacao")
  const [formatoRelatorio, setFormatoRelatorio] = useState("pdf")

  const gerarRelatorio = () => {
    toast({
      title: `Relatório gerado em ${formatoRelatorio.toUpperCase()} com sucesso!`,
      description: `Relatório de ${tipoRelatorio} gerado para o período de ${dataInicio} a ${dataFim}.`,
    })
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Relatórios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Filtros do Relatório</CardTitle>
            <CardDescription>Selecione o período e o tipo de relatório</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="data-inicio">Data Início</Label>
                <Input
                  id="data-inicio"
                  type="date"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="data-fim">Data Fim</Label>
                <Input id="data-fim" type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
              </div>
            </div>
            <div>
              <Label htmlFor="tipo-relatorio">Tipo de Relatório</Label>
              <Select value={tipoRelatorio} onValueChange={setTipoRelatorio}>
                <SelectTrigger id="tipo-relatorio">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="movimentacao">Movimentação de Tanques</SelectItem>
                  <SelectItem value="estoque">Controle de Estoque</SelectItem>
                  <SelectItem value="leituras">Leituras de Equipamentos</SelectItem>
                  <SelectItem value="ocorrencias">Ocorrências Operacionais</SelectItem>
                  <SelectItem value="consolidado">Relatório Consolidado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="formato-relatorio">Formato do Relatório</Label>
              <Select value={formatoRelatorio} onValueChange={setFormatoRelatorio}>
                <SelectTrigger id="formato-relatorio">
                  <SelectValue placeholder="Selecione o formato" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={gerarRelatorio} className="w-full">
              {formatoRelatorio === "pdf" ? (
                <FilePdf className="mr-2 h-4 w-4" />
              ) : (
                <Download className="mr-2 h-4 w-4" />
              )}
              Gerar Relatório
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Relatórios Disponíveis</CardTitle>
            <CardDescription>Relatórios pré-configurados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => {
                  setTipoRelatorio("movimentacao")
                  gerarRelatorio()
                }}
              >
                <Database className="mr-2 h-4 w-4" />
                Movimentação Diária de Tanques
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => {
                  setTipoRelatorio("estoque")
                  gerarRelatorio()
                }}
              >
                <Beaker className="mr-2 h-4 w-4" />
                Consumo de Insumos
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => {
                  setTipoRelatorio("leituras")
                  gerarRelatorio()
                }}
              >
                <Gauge className="mr-2 h-4 w-4" />
                Vazão Média Mensal
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => {
                  setTipoRelatorio("ocorrencias")
                  gerarRelatorio()
                }}
              >
                <FileText className="mr-2 h-4 w-4" />
                Ocorrências por Tipo
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => {
                  setTipoRelatorio("consolidado")
                  gerarRelatorio()
                }}
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Relatório Gerencial
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Relatórios</CardTitle>
          <CardDescription>Relatórios gerados recentemente</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-md p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Movimentação de Tanques</h3>
                <p className="text-sm text-muted-foreground">Período: 01/05/2025 - 02/05/2025</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <FilePdf className="h-4 w-4" />
                  <span className="sr-only">Download PDF</span>
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download Excel</span>
                </Button>
              </div>
            </div>
            <div className="border rounded-md p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Controle de Estoque</h3>
                <p className="text-sm text-muted-foreground">Período: 01/05/2025 - 02/05/2025</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <FilePdf className="h-4 w-4" />
                  <span className="sr-only">Download PDF</span>
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download Excel</span>
                </Button>
              </div>
            </div>
            <div className="border rounded-md p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Leituras de Equipamentos</h3>
                <p className="text-sm text-muted-foreground">Período: 01/05/2025 - 02/05/2025</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <FilePdf className="h-4 w-4" />
                  <span className="sr-only">Download PDF</span>
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download Excel</span>
                </Button>
              </div>
            </div>
            <div className="border rounded-md p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Ocorrências Operacionais</h3>
                <p className="text-sm text-muted-foreground">Período: 01/04/2025 - 30/04/2025</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <FilePdf className="h-4 w-4" />
                  <span className="sr-only">Download PDF</span>
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download Excel</span>
                </Button>
              </div>
            </div>
            <div className="border rounded-md p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Relatório Consolidado</h3>
                <p className="text-sm text-muted-foreground">Período: 01/04/2025 - 30/04/2025</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <FilePdf className="h-4 w-4" />
                  <span className="sr-only">Download PDF</span>
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download Excel</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
