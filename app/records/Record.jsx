import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Record(props) {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>{props.hospitalName}</AccordionTrigger>
				<AccordionContent>{props.prescription}</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
