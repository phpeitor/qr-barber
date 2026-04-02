export type BiPlatform = 'powerbi' | 'tableau' | 'other';
export type EmbedStrategy = 'iframe-public' | 'official-sdk' | 'secure-token';
export type AppRole = 'admin' | 'operaciones' | 'finanzas' | 'comercial';

export interface ReportItem {
  id: string;
  name: string;
  module: string;
  url: string;
  platform: BiPlatform;
  strategy: EmbedStrategy;
}

export interface UserItem {
  user: string;
  role: AppRole;
  displayName?: string;
}

export const initialReports: ReportItem[] = [
  {
    id: 'fabric-sales-overview',
    name: 'Ventas Globales',
    module: 'Comercial',
    url: 'https://app.fabric.microsoft.com/view?r=eyJrIjoiZmFrZS1leGFtcGxlLXRva2VuIiwidCI6ImZha2UtdGVuYW50LWlkIiwibSI6ImZha2UtbW9kZSJ9',
    platform: 'powerbi',
    strategy: 'iframe-public'
  },
  {
    id: 'tableau-regional-demand',
    name: 'Demanda Regional',
    module: 'Operaciones',
    url: 'https://public.tableau.com/views/RegionalSampleWorkbook/Stocks?:showVizHome=no',
    platform: 'tableau',
    strategy: 'iframe-public'
  },
  {
    id: 'finance-cashflow-overview',
    name: 'Flujo de Caja',
    module: 'Finanzas',
    url: 'https://app.fabric.microsoft.com/view?r=eyJrIjoiZmFrZS1maW5hbmNlLXRva2VuIiwidCI6ImZha2UtdGVuYW50LWlkIiwibSI6ImZha2UtbW9kZSJ9',
    platform: 'powerbi',
    strategy: 'iframe-public'
  }
];

export const users: UserItem[] = [
  {
    user: 'admin',
    role: 'admin',
    displayName: 'Administrador'
  },
  {
    user: 'operaciones',
    role: 'operaciones',
    displayName: 'Usuario Operaciones'
  },
  {
    user: 'finanzas',
    role: 'finanzas',
    displayName: 'Usuario Finanzas'
  },
  {
    user: 'comercial',
    role: 'comercial',
    displayName: 'Usuario Comercial'
  }
];
