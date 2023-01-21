import { Button } from "../components/button";
import { Plus } from "react-feather";

export default function Buttons() {
  return (
    <>
      <main id="main" className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-xl">Buttons Test Page</div>
          <section className="bg-white p-6">
            <div className="mb-4 text-lg">Label</div>
            <div className="flex flex-wrap gap-3">
              <Button preset="primary" label="Primary"></Button>
              <Button preset="secondary" label="Secondary"></Button>
              <Button preset="default" label="Default"></Button>
            </div>
          </section>
          <section className="bg-white p-6">
            <div className="mb-4 text-lg">Icon + Label</div>
            <div className="flex flex-wrap gap-3">
              <Button preset="primary" label="Primary">
                <Plus />
              </Button>
              <Button preset="secondary" label="Secondary">
                <Plus />
              </Button>
              <Button preset="default" label="Default">
                <Plus />
              </Button>
            </div>
          </section>
          <section className="bg-white p-6">
            <div className="mb-4 text-lg">Icon Only</div>
            <div className="flex flex-wrap gap-3">
              <Button preset="primary" title="Primary" iconOnly={true}>
                <Plus />
              </Button>
              <Button preset="secondary" title="Secondary" iconOnly={true}>
                <Plus />
              </Button>
              <Button preset="default" title="Default" iconOnly={true}>
                <Plus />
              </Button>
            </div>
          </section>
          <section className="bg-white p-6">
            <div className="mb-4 text-lg">All Presets</div>
            <div className="flex flex-wrap gap-3">
              <Button preset="primary" label="Primary"></Button>
              <Button preset="secondary" label="Secondary"></Button>
              <Button preset="danger" label="Danger"></Button>
              <Button preset="danger-outline" label="Danger Outline"></Button>
              <Button preset="success" label="Success"></Button>
              <Button preset="success-outline" label="Success Outline"></Button>
              <Button preset="default" label="Default"></Button>
              <Button preset="white" label="White"></Button>
              <Button preset="transparent" label="Transparent"></Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
