import type * as React from 'react';
type IconName = 'home'|'projects'|'about'|'mail'|'music'|'sound-on'|'sound-off'|'star'|'heart'|'lamp'|'book'|'map'|'settings'|'sun'|'moon'|'trophy'|'lock'|'arrow'|'close'|'sparkle'|'check'|'menu'|'paw'|'leaf'|'mug';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary'|'secondary'|'ghost'|'danger'; size?: 'sm'|'md'|'lg'; loading?: boolean; icon?: IconName; iconAfter?: IconName }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: IconName; label: string; variant?: 'default'|'primary' }
export declare function IconButton(props: IconButtonProps): React.ReactElement;
export interface IconProps { name: IconName; size?: number; label?: string; className?: string; style?: React.CSSProperties }
export declare function Icon(props: IconProps): React.ReactElement;
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { label: string; hint?: string; error?: string; multiline?: boolean }
export declare function TextField(props: TextFieldProps): React.ReactElement;
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { label: string; options: (string | { value: string; label: string })[]; hint?: string; error?: string }
export declare function Select(props: SelectProps): React.ReactElement;
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> { label: React.ReactNode }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> { label: React.ReactNode }
export declare function Radio(props: RadioProps): React.ReactElement;
export interface LampToggleProps { label: React.ReactNode; checked?: boolean; defaultChecked?: boolean; disabled?: boolean; onChange?: (on: boolean) => void }
export declare function LampToggle(props: LampToggleProps): React.ReactElement;
export interface HeartSliderProps { label: React.ReactNode; min?: number; max?: number; step?: number; value?: number; defaultValue?: number; disabled?: boolean; onChange?: (n: number) => void }
export declare function HeartSlider(props: HeartSliderProps): React.ReactElement;
export interface CardProps extends React.HTMLAttributes<HTMLElement> { variant?: 'paper'|'sticky'|'sign'|'parchment'|'pinned'; title?: React.ReactNode; interactive?: boolean; as?: string }
export declare function Card(props: CardProps): React.ReactElement;
export interface PolaroidProps { src?: string; alt?: string; caption?: React.ReactNode; tilt?: number }
export declare function Polaroid(props: PolaroidProps): React.ReactElement;
export interface GameWindowProps { title: React.ReactNode; children?: React.ReactNode; footer?: React.ReactNode; onClose?: () => void; modal?: boolean }
export declare function GameWindow(props: GameWindowProps): React.ReactElement;
export interface HUDProps { player: string; level?: string; found: number; total: number; muted?: boolean; time?: 'day'|'dusk'|'night'; onToggleSound?: () => void; onCycleTime?: () => void; onMenu?: () => void }
export declare function HUD(props: HUDProps): React.ReactElement;
export interface DialogueBoxProps { text: string; speaker?: string; portrait?: React.ReactNode; onNext?: () => void; typewriter?: boolean; speed?: number }
export declare function DialogueBox(props: DialogueBoxProps): React.ReactElement;
export interface AchievementToastProps { title: React.ReactNode; kicker?: React.ReactNode; description?: React.ReactNode; icon?: IconName }
export declare function AchievementToast(props: AchievementToastProps): React.ReactElement;
export interface ItemCardProps { name: string; rarity?: 'common'|'rare'|'epic'|'legendary'; icon?: IconName; art?: React.ReactNode; stats?: Record<string, React.ReactNode>; onInspect?: () => void }
export declare function ItemCard(props: ItemCardProps): React.ReactElement;
export interface QuestLogProps { quests: { title: string; done?: boolean }[]; title?: string }
export declare function QuestLog(props: QuestLogProps): React.ReactElement;
export interface WorldMapProps { locations: { id: string; label: string; icon?: IconName; x: number; y: number; href?: string }[]; current?: string; onSelect?: (id: string) => void; label?: string }
export declare function WorldMap(props: WorldMapProps): React.ReactElement;
export interface BadgeProps { children?: React.ReactNode; tone?: 'honey'|'sage'|'berry'|'sky'|'lavender'; icon?: IconName; pixel?: boolean }
export declare function Badge(props: BadgeProps): React.ReactElement;
export interface TooltipProps { content: React.ReactNode; children: React.ReactElement; open?: boolean }
export declare function Tooltip(props: TooltipProps): React.ReactElement;
export interface ProgressBarProps { value: number; max?: number; label?: string; valueText?: string; tone?: 'primary'|'sage'|'honey'|'berry' }
export declare function ProgressBar(props: ProgressBarProps): React.ReactElement;
export interface StatBarProps { label: string; value: number; max?: number; tone?: string }
export declare function StatBar(props: StatBarProps): React.ReactElement;
export interface LoaderProps { kind?: 'pinwheel'|'acorn'|'cup'; label?: string }
export declare function Loader(props: LoaderProps): React.ReactElement;
export interface TabsProps { tabs: { id: string; label: React.ReactNode; content: React.ReactNode }[]; defaultTab?: string; label?: string }
export declare function Tabs(props: TabsProps): React.ReactElement;
export interface BreadcrumbsProps { items: { label: React.ReactNode; href?: string }[] }
export declare function Breadcrumbs(props: BreadcrumbsProps): React.ReactElement;
export interface TimelineProps { items: { when: string; title: React.ReactNode; text?: React.ReactNode; icon?: IconName; reached?: boolean }[] }
export declare function Timeline(props: TimelineProps): React.ReactElement;
export interface AccordionProps { items: { title: React.ReactNode; content: React.ReactNode }[]; defaultOpen?: number }
export declare function Accordion(props: AccordionProps): React.ReactElement;
export interface EmptyStateProps { title?: React.ReactNode; text?: React.ReactNode; action?: React.ReactNode }
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;
export interface MascotProps { mood?: 'idle'|'wave'|'happy'|'sleepy'|'talking'; size?: number; label?: string }
export declare function Mascot(props: MascotProps): React.ReactElement;
export interface TitleScreenProps { title: string; tagline?: string; onStart?: () => void; onSkip?: () => void; tips?: string[]; startLabel?: string }
export declare function TitleScreen(props: TitleScreenProps): React.ReactElement;
