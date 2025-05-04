"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    {
      title: "Operação",
      items: [
        {
          title: "Painel Principal",
          href: "/painel-principal",
          description: "Visão geral do sistema com informações relevantes",
        },
        {
          title: "Controle de Tanques",
          href: "/controle-tanques",
          description: "Monitoramento e controle dos tanques de armazenamento",
        },
        {
          title: "Controle de Estoque",
          href: "/controle-estoque",
          description: "Gestão de estoque de produtos químicos e materiais",
        },
        {
          title: "Leituras de Equipamentos",
          href: "/leituras-equipamentos",
          description: "Registro de leituras de equipamentos e instrumentos",
        },
      ],
    },
    {
      title: "Manutenção",
      items: [
        {
          title: "Parada Programada",
          href: "/parada-programada",
          description: "Gestão de paradas programadas de processo (PPP)",
        },
        {
          title: "Manutenções Diárias",
          href: "/manutencoes-diarias",
          description: "Registro e acompanhamento de manutenções diárias",
        },
      ],
    },
    {
      title: "Laboratório",
      items: [
        {
          title: "Análises Laboratoriais",
          href: "/laboratorio",
          description: "Gestão de análises e coletas de amostras",
        },
      ],
    },
    {
      title: "Cadastros",
      items: [
        {
          title: "Cadastro de Tanques",
          href: "/cadastro-tanques",
          description: "Cadastro e configuração de tanques",
        },
        {
          title: "Cadastro de Pessoal",
          href: "/cadastro-pessoal",
          description: "Cadastro de funcionários e colaboradores",
        },
        {
          title: "Cadastro de Perfil",
          href: "/cadastro-perfil",
          description: "Cadastro detalhado de perfis de usuários",
        },
        {
          title: "Cadastro Simplificado",
          href: "/cadastro-perfil-simples",
          description: "Cadastro simplificado de perfis de usuários",
        },
        {
          title: "Calendário de Folgas",
          href: "/calendario-folgas",
          description: "Gestão de folgas e ausências programadas",
        },
        {
          title: "Perfis de Acesso",
          href: "/perfis-acesso",
          description: "Configuração de perfis de acesso ao sistema",
        },
      ],
    },
    {
      title: "Visitas",
      href: "/registro-visitas",
      description: "Registro e controle de visitas na unidade",
    },
    {
      title: "Relatórios",
      href: "/relatorios",
      description: "Geração de relatórios operacionais e gerenciais",
    },
    {
      title: "Dashboard",
      href: "/dashboard-visual",
      description: "Visualização gráfica do sistema",
    },
  ]

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/painel-principal" className="mr-6 flex items-center space-x-2">
          <span className="hidden sm:inline-block font-bold text-xl">FLUCOR UNIDADE MOGI DAS CRUZES</span>
          <span className="sm:hidden font-bold text-xl">FLUCOR</span>
        </Link>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => {
                if (route.items) {
                  return (
                    <NavigationMenuItem key={route.title}>
                      <NavigationMenuTrigger>{route.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {route.items.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              active={pathname === item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                } else {
                  return (
                    <NavigationMenuItem key={route.title}>
                      <Link href={route.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{route.title}</NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-2 py-6">
                {routes.map((route) => {
                  if (route.items) {
                    return (
                      <div key={route.title} className="py-2">
                        <h4 className="font-medium mb-1 px-2">{route.title}</h4>
                        <div className="grid gap-1">
                          {route.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className={cn(
                                "block px-2 py-1 text-sm rounded-md",
                                pathname === item.href
                                  ? "bg-muted font-medium"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <Link
                        key={route.title}
                        href={route.href}
                        className={cn(
                          "block px-2 py-1 text-sm rounded-md",
                          pathname === route.href
                            ? "bg-muted font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {route.title}
                      </Link>
                    )
                  }
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { active?: boolean }>(
  ({ className, title, children, active, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              active ? "bg-accent text-accent-foreground" : "",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
