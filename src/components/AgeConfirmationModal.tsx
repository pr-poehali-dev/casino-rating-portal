import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AgeConfirmationModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem('ageConfirmationShown');
    const now = new Date().getTime();
    const oneDayInMs = 24 * 60 * 60 * 1000;

    if (!lastShown || now - parseInt(lastShown) > oneDayInMs) {
      setOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    const now = new Date().getTime();
    localStorage.setItem('ageConfirmationShown', now.toString());
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="AlertCircle" size={32} className="text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl">
            Ważne informacje
          </DialogTitle>
          <DialogDescription className="text-center space-y-4 pt-4">
            <p className="text-base">
              Ta strona ma charakter wyłącznie informacyjny i nie prowadzi gier na pieniądze.
            </p>
            <p className="text-base font-semibold">
              Potwierdzasz, że masz ukończone 18 lat?
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button 
            onClick={handleConfirm}
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            <Icon name="Check" className="mr-2" size={18} />
            Tak, mam 18 lat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AgeConfirmationModal;
