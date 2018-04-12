import { Slides } from 'ionic-angular';
import { OnInit, OnChanges, EventEmitter, SimpleChanges, TemplateRef, ElementRef } from '@angular/core';
import { ICalendarComponent, IDayView, IDayViewRow, IDisplayEvent, IEvent, ITimeSelected, IRange, CalendarMode, IDateFormatter } from './calendar';
import { CalendarService } from './calendar.service';
import { IDisplayAllDayEvent, IDayViewAllDayEventSectionTemplateContext, IDayViewNormalEventSectionTemplateContext } from "./calendar";
export declare class DayViewComponent implements ICalendarComponent, OnInit, OnChanges {
    private calendarService;
    private elm;
    slider: Slides;
    class: boolean;
    dayviewAllDayEventTemplate: TemplateRef<IDisplayAllDayEvent>;
    dayviewNormalEventTemplate: TemplateRef<IDisplayEvent>;
    dayviewAllDayEventSectionTemplate: TemplateRef<IDayViewAllDayEventSectionTemplateContext>;
    dayviewNormalEventSectionTemplate: TemplateRef<IDayViewNormalEventSectionTemplateContext>;
    formatHourColumn: string;
    formatDayTitle: string;
    allDayLabel: string;
    hourParts: number;
    eventSource: IEvent[];
    markDisabled: (date: Date) => boolean;
    locale: string;
    dateFormatter: IDateFormatter;
    dir: string;
    scrollToHour: number;
    preserveScrollPosition: boolean;
    lockSwipeToPrev: boolean;
    lockSwipes: boolean;
    startHour: number;
    endHour: number;
    spaceBetween: number;
    hourSegments: number;
    onRangeChanged: EventEmitter<IRange>;
    onEventSelected: EventEmitter<IEvent>;
    onTimeSelected: EventEmitter<ITimeSelected>;
    onTitleChanged: EventEmitter<string>;
    slideOption: {
        runCallbacksOnInit: boolean;
        loop: boolean;
    };
    views: IDayView[];
    currentViewIndex: number;
    direction: number;
    mode: CalendarMode;
    range: IRange;
    private inited;
    private callbackOnInit;
    private currentDateChangedFromParentSubscription;
    private eventSourceChangedSubscription;
    private hourColumnLabels;
    private initScrollPosition;
    private formatTitle;
    private formatHourColumnLabel;
    private hourRange;
    constructor(calendarService: CalendarService, elm: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onSlideChanged(): void;
    move(direction: number): void;
    static createDateObjects(startTime: Date, startHour: number, endHour: number, timeInterval: number): IDayViewRow[];
    private getHourColumnLabels();
    getViewData(startTime: Date): IDayView;
    getRange(currentDate: Date): IRange;
    onDataLoaded(): void;
    refreshView(): void;
    getTitle(): string;
    private static compareEventByStartOffset(eventA, eventB);
    select(selectedTime: Date, events: IDisplayEvent[]): void;
    placeEvents(orderedEvents: IDisplayEvent[]): void;
    placeAllDayEvents(orderedEvents: IDisplayEvent[]): void;
    overlap(event1: IDisplayEvent, event2: IDisplayEvent): boolean;
    calculatePosition(events: IDisplayEvent[]): void;
    private static calculateWidth(orderedEvents, size, hourParts);
    eventSelected(event: IEvent): void;
    setScrollPosition(scrollPosition: number): void;
}
