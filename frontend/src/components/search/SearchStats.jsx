import {
  FolderGit2,
  FileCode2,
  Bot,
  Search,
} from "lucide-react";

const stats=[
{
title:"Repositories",
value:"12",
icon:FolderGit2,
color:"from-cyan-500 to-blue-600"
},
{
title:"Files",
value:"428",
icon:FileCode2,
color:"from-green-500 to-emerald-500"
},
{
title:"AI Chats",
value:"421",
icon:Bot,
color:"from-purple-500 to-pink-500"
},
{
title:"Results",
value:"3.2K",
icon:Search,
color:"from-orange-500 to-red-500"
}
];

export default function SearchStats(){

return(

<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

{stats.map((item)=>(

<div
key={item.title}
className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg"
>

<div
className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${item.color}`}
>

<item.icon
className="text-white"
size={22}
/>

</div>

<h2 className="text-3xl font-bold text-white">
{item.value}
</h2>

<p className="mt-1 text-slate-400">
{item.title}
</p>

</div>

))}

</div>

);

}