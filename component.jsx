/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DSMtwWMLig9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold">Protein Database</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-sm text-gray-600">
            Home
          </a>
          <a href="#" className="text-sm text-gray-600">
            Tools
          </a>
          <a href="#" className="text-sm text-gray-600">
            FAQ
          </a>
          <Button variant="default">Contact Us</Button>
        </nav>
      </header>
      <main className="mt-8">
        <section className="p-6 bg-green-100 rounded-lg">
          <h2 className="text-2xl font-bold">Protein Search Engine</h2>
          <p className="mt-2 text-sm text-gray-600">
            Reveal unique sequences with the Protien Search Engine applied to your protein.
          </p>
          <div className="flex items-center mt-4">
            <Input type="text" placeholder="bovine myoglobin" className="w-full p-2 border rounded-l-md" />
            <Button variant="default" className="rounded-r-md">
              Search
            </Button>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Query</h3>
          <Card className="mt-4">
            <CardHeader className="flex items-center">
              <img
                src="/placeholder.svg"
                alt="Bovine Myoglobin"
                className="h-12 w-12"
                width="50"
                height="50"
                style={{ aspectRatio: "50/50", objectFit: "cover" }}
              />
              <div className="ml-4">
                <h4 className="text-lg font-bold">Bovine Myoglobin</h4>
                <p className="text-sm text-gray-600">Organism: Cow</p>
                <p className="text-sm text-gray-600">Sequence: MGLSDGEWQL...</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Similarity</p>
                <p className="text-2xl font-bold text-green-600">100%</p>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Functionally similar proteins</h3>
          <div className="flex items-center mt-2">
            <Badge variant="default">14</Badge>
          </div>
          <div className="mt-4 space-y-4">
            <Card>
              <CardHeader className="flex items-center">
                <img
                  src="/placeholder.svg"
                  alt="Myoglobin"
                  className="h-12 w-12"
                  width="50"
                  height="50"
                  style={{ aspectRatio: "50/50", objectFit: "cover" }}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Myoglobin</h4>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Similarity</p>
                  <p className="text-2xl font-bold text-green-600">98%</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center">
                <img
                  src="/placeholder.svg"
                  alt="Myoglobin"
                  className="h-12 w-12"
                  width="50"
                  height="50"
                  style={{ aspectRatio: "50/50", objectFit: "cover" }}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Myoglobin</h4>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Similarity</p>
                  <p className="text-2xl font-bold text-green-600">98%</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center">
                <img
                  src="/placeholder.svg"
                  alt="Myoglobin"
                  className="h-12 w-12"
                  width="50"
                  height="50"
                  style={{ aspectRatio: "50/50", objectFit: "cover" }}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Myoglobin</h4>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Similarity</p>
                  <p className="text-2xl font-bold text-green-600">98%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
