import { ListDetail } from "@/features/list/listDetail";

export default async function Page({ params }: { params: { id: string } }) {
    // 非同期のPromiseで取得
    const resolvedParams = await params;
    return (
        <>
            <ListDetail id={resolvedParams.id} />
        </>
    );
};
