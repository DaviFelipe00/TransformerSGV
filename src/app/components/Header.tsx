export default function Header() {
  return (
    <header className="border-b border-border/40 bg-background backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                <svg 
                  className="h-6 w-6 text-background"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                TransformerSVG
              </h1>
            </div>
            <p className="text-sm text-muted-foreground md:text-base max-w-xl text-balance">
              Transforme suas imagens em vetores escaláveis com precisão profissional
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
