import Breadcrumbs from "@/components/invoices/breadcrumbs";
import Form from "@/components/invoices/create-form";
import { fetchCustomers } from "@/lib/data";

const Page = async () => {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/new",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
};

export default Page;
