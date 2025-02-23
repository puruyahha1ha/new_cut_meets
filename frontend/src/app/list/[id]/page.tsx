import { ListDetail } from "@/features/list/listDetail";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
            <ListDetail id={params.id} />
        </>
    );
};
