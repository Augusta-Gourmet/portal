import {
  AiOutlineShopping,
  AiOutlineTeam,
  AiOutlineTool,
  AiOutlineReconciliation,
  AiOutlineFileText
} from "react-icons/ai";

export const SidebarData = [
  {
    title: 'Consultas',
    path: '/reports',
    icon: <AiOutlineFileText className="icon"/>,
    sub: []
  },
  {
    title: 'Funcionários',
    path: '',
    icon: <AiOutlineTeam className="icon"/>,
    sub: [
      { title: "Sub1", path: "/sub1" },
      { title: "Sub2", path: "/sub2" }
    ]
  },
  {
    title: 'Compras',
    path: '/purchases',
    icon: <AiOutlineShopping className="icon"/>,
    sub: []
  },
  {
    title: 'Produtos',
    path: '/products',
    icon: <AiOutlineTool className="icon"/>,
    sub: []
  },
  {
    title: 'Atividades',
    path: '/activities',
    icon: <AiOutlineReconciliation className="icon"/>,
    sub: []
  },
]
