import { Button } from ".././components/button";
import { Modal } from "../components/modal/modal";
import { HelpCircle, UploadCloud } from "react-feather";

const HomeAddProgrammeModal = ({ visible, hide }) => {
  const hideModal = () => {
    hide(true);
  };
  return (
    <>
      <Modal
        visible={visible}
        hide={hide}
        dismissableMask={false}
        title="Add Programme"
        sidebar={true}
        content={
          <form className="grid gap-5 mt-1 mb-2" autoComplete="off">
            <div>
              <label htmlFor="programmeLogo" className="mb-1 flex items-center">
                <span className="text-neutral-700">Logo</span>
              </label>
              <div className="overflow-hidden relative shadow-sm group/button">
                <Button label="Upload Logo" fluid="true">
                  <UploadCloud className="w-4 h-4" />
                </Button>
                <input className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 inset-0" type="file" name="documents[]" accept="image/*" />
              </div>
              <div className="text-neutral-500 text-xs mt-1.5">Valid formats · PNG, JPEG (max. 300 x 300px, 50mb)</div>
            </div>
            <div>
              <label htmlFor="programmeName" className="mb-1 flex items-center">
                <span className="text-neutral-700">Programme Title</span>
                <span className="text-neutral-500 mx-1">·</span>
                <span className="text-neutral-500">Required</span>
              </label>
              <input autoFocus id="programmeName" type="text" />
            </div>
            <div>
              <label htmlFor="programmeCode" className="mb-1 block">
                <span className="text-neutral-700">Code</span>
              </label>
              <div className="relative">
                <input id="programmeCode" type="text" />
                <div title="Code is used to differentiate your programme and is only visible to staff." className="absolute top-1/2 -translate-y-1/2 right-2.5">
                  <HelpCircle className="h-5 w-5 text-neutral-500 cursor-pointer" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="programmeAcademicYear" className="mb-1 block">
                  <span className="text-neutral-700">Academic Year</span>
                </label>
                <div className="relative">
                  <input id="programmeAcademicYear" type="text" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="programmeStartDate" className="mb-1 block">
                <span className="text-neutral-700">Start Date</span>
              </label>
              <input id="programmeStartDate" max="9999-12-31" type="date" />
            </div>
            <div>
              <label htmlFor="programmeEndDate" className="mb-1 block">
                <span className="text-neutral-700">End Date</span>
              </label>
              <input id="programmeEndDate" max="9999-12-31" type="date" />
            </div>
          </form>
        }
        footer={
          <>
            <Button preset="secondary" label="Cancel" onClick={hideModal} />
            <Button preset="primary" label="Add" onClick={hideModal} />
          </>
        }
      />
    </>
  );
};

export { HomeAddProgrammeModal };
