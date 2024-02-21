"use client";

import { ubuntu } from "@/fonts/ubuntu";
import Image from "next/image";
import { useState } from "react";
import { RegisterForm } from "./register-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export const RegisterDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-[#00CAFC] to-[#0056E2] py-4 px-10 h-full">
          <Image
            src="/add-icon.svg"
            alt=""
            height={20}
            width={20}
            className={`mr-2 ${ubuntu.className}`}
          />
          Cadastrar
        </Button>
      </DialogTrigger>
      <DialogContent
        className="bg-gradient-to-r from-[#00CAFC] to-[#0056E2] p-0.5 rounded-lg 
                                  before:absolute before:inset-0 before:h-full before:w-full 
                                  before:bg-gradient-to-r before:from-[#00CAFC] before:to-[#0056E2] before:blur-lg before:z-[-1]"
      >
        <div className="flex flex-col justify-between items-center p-12 gap-12 rounded-lg bg-gradient-to-tl from-[15.31%] from-[#000814] to-[#001e4d] to-[85.58%] text-white">
          <DialogHeader className="flex flex-row items-center justify-between w-full">
            <DialogTitle className="flex justify-start items-center gap-4 w-fit">
              <div className="p-3 rounded-full bg-gradient-to-r from-[#00CAFC] to-[#0056E2]">
                <Image src="/add-icon.svg" alt="" width={40} height={40} />
              </div>
              <h2 className="text-3xl">Cadastrar</h2>
            </DialogTitle>
            <DialogClose asChild>
              <Button className="w-fit bg-transparent">
                <Image src="/close.svg" alt="" width={16} height={16} />
              </Button>
            </DialogClose>
          </DialogHeader>
          <RegisterForm setDialogOpen={setOpen}>
            <DialogClose asChild>
              <Button className="bg-white flex items-center gap-1 space-y-0">
                <Image src="/back-sign.svg" alt="" width={16} height={16} />
                <span className="font-bold bg-gradient-to-r from-[#00CAFC] to-[#0056E2] text-transparent bg-clip-text">
                  Voltar
                </span>
              </Button>
            </DialogClose>
          </RegisterForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};
