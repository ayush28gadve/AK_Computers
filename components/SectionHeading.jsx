export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-gradient font-heading text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="gradient-line mx-auto mt-4 max-w-[120px] rounded-full" aria-hidden="true" />
      {subtitle && <p className="mt-4 text-lg text-txt-secondary">{subtitle}</p>}
    </div>
  );
}
