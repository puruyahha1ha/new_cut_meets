import { ModelList } from "@/features/list/components/ModelList";

export default function Page() {
    return (
        <>
            <ModelList query="test" currentPage={1} />
        </>
    );
}