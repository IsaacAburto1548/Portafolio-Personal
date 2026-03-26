export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className='px-3 py-1 text-sm rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-default'>
      {skill}
    </span>
  );
}
