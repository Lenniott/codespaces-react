import { Button } from "../components/button";
import { Plus } from "react-feather";

export default function Buttons() {
  return (
    <>
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">Buttons Test Page</div>
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
        </div>
      </main>
    </>
  );
}
