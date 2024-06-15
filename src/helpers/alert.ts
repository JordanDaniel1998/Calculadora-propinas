import Swal, { SweetAlertResult } from "sweetalert2";

type showDeleteConfirmationProps = {
  messages: {
    title: string;
    text: string;
    confirmation: string;
  };
};

type showSuccessMessageProps = {
  messages: {
    response: string;
  };
};

export function showDeleteConfirmation({
  messages,
}: showDeleteConfirmationProps): Promise<SweetAlertResult> {
  return Swal.fire({
    title: messages.title,
    text: messages.text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: messages.confirmation,
  });
}

export function showSuccessMessage({
  messages,
}: showSuccessMessageProps): Promise<SweetAlertResult> {
  return Swal.fire({
    title: messages.response,
    icon: "success",
  });
}
