import { ListDetail } from "@/features/list/listDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    // 非同期のPromiseで取得
    const resolvedParams = await params;
    console.log(resolvedParams.id);
    return (
        <>
            <ListDetail id={resolvedParams.id} />
        </>
    );
};
