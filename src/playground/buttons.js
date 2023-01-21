import { Button } from "../components/button";
import { Plus } from "react-feather";

export default function Buttons() {
  return (
    <>
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-xl">Buttons Test Page</div>
          <section className="bg-white p-6">
            <div className="mb-4 text-lg">Label</div>
            <div className="flex flex-wrap gap-3">
              <Button preset="primary" label="Primary"></Button>
              <Button preset="secondary" label="Secondary"></Button>
              <Button preset="danger" label="Danger"></Button>
              <Button preset="danger-outline" label="Danger Outline"></Button>
              <Button preset="success" label="Success"></Button>
              <Button preset="success-outline" label="Success Outline"></Button>
              <Button preset="default" label="Default"></Button>
              <Button preset="no-border" label="No Border"></Button>
              <Button preset="transparent" label="Transparent"></Button>
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
              <Button preset="danger" label="Danger">
                <Plus />
              </Button>
              <Button preset="danger-outline" label="Danger Outline">
                <Plus />
              </Button>
              <Button preset="success" label="Success">
                <Plus />
              </Button>
              <Button preset="success-outline" label="Success Outline">
                <Plus />
              </Button>
              <Button preset="default" label="Default">
                <Plus />
              </Button>
              <Button preset="no-border" label="No Border">
                <Plus />
              </Button>
              <Button preset="transparent" label="Transparent">
                <Plus />
              </Button>
            </div>
          </section>
          <section className="bg-white p-6">
            <div className="mb-4 text-lg">Icon</div>
            <div className="flex flex-wrap gap-3">
              <Button preset="primary" title="Primary" iconOnly={true}>
                <Plus />
              </Button>
              <Button preset="secondary" title="Secondary" iconOnly={true}>
                <Plus />
              </Button>
              <Button preset="danger" title="Danger" iconOnly={true}>
                <Plus />
              </Button>
              <Button
                preset="danger-outline"
                title="Danger Outline"
                iconOnly={true}
              >
                <Plus />
              </Button>
              <Button preset="success" title="Success" iconOnly={true}>
                <Plus />
              </Button>
              <Button
                preset="success-outline"
                title="Success Outline"
                iconOnly={true}
              >
                <Plus />
              </Button>
              <Button preset="default" title="Default" iconOnly={true}>
                <Plus />
              </Button>
              <Button preset="no-border" title="No Border" iconOnly={true}>
                <Plus />
              </Button>
              <Button preset="transparent" title="Transparent" iconOnly={true}>
                <Plus />
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
