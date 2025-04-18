import Form from "../ui/components/Form";
import { Card,CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InfoSection from "../ui/components/InfoSection";
import AI_Generator_Button from "../ui/components/AI_Generator_Button";

const Page = ()=>{
    console.log('rendered');
    return(
        <div className="flex-col mb-20 w-full px-8 mt-10">
            <AI_Generator_Button></AI_Generator_Button>
            <Form></Form>
            <Card className="w-full bg-neutral-800 border-gray-800 px-2 md:px-20 mb-4">
                <CardContent className="space-y-5">
                <Button
                    type="submit"
                    disabled
                    className="w-full bg-teal-500 font-medium h-9"
                >
                    2. Config Xexchange
                </Button>
                <Button
                    type="submit"
                    disabled
                    className="w-full bg-teal-500 font-medium h-9"
                >
                    3. Enable Transactions
                </Button>
                </CardContent>
            </Card>
            <InfoSection></InfoSection>
        </div>
    )
}
export default Page;