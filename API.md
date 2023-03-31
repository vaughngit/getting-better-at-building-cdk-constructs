# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChangeController <a name="ChangeController" id="pipeline-with-time-windows.ChangeController"></a>

A change controller.

When added to a stage in a pipeline, this will check against
a calendar and enable or disable the stage transition based off that calendar,
defaulting to closed when the calendar cannot be found or when
the check against it fails. It also checks to against alarms.

#### Initializers <a name="Initializers" id="pipeline-with-time-windows.ChangeController.Initializer"></a>

```typescript
import { ChangeController } from 'pipeline-with-time-windows'

new ChangeController(scope: Construct, id: string, props: ChangeControllerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pipeline-with-time-windows.ChangeController.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pipeline-with-time-windows.ChangeController.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pipeline-with-time-windows.ChangeController.Initializer.parameter.props">props</a></code> | <code><a href="#pipeline-with-time-windows.ChangeControllerProps">ChangeControllerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pipeline-with-time-windows.ChangeController.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pipeline-with-time-windows.ChangeController.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="pipeline-with-time-windows.ChangeController.Initializer.parameter.props"></a>

- *Type:* <a href="#pipeline-with-time-windows.ChangeControllerProps">ChangeControllerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pipeline-with-time-windows.ChangeController.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="pipeline-with-time-windows.ChangeController.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pipeline-with-time-windows.ChangeController.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="pipeline-with-time-windows.ChangeController.isConstruct"></a>

```typescript
import { ChangeController } from 'pipeline-with-time-windows'

ChangeController.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="pipeline-with-time-windows.ChangeController.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pipeline-with-time-windows.ChangeController.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="pipeline-with-time-windows.ChangeController.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### PipelineWithChangeControl <a name="PipelineWithChangeControl" id="pipeline-with-time-windows.PipelineWithChangeControl"></a>

A pipeline with a change controller.

#### Initializers <a name="Initializers" id="pipeline-with-time-windows.PipelineWithChangeControl.Initializer"></a>

```typescript
import { PipelineWithChangeControl } from 'pipeline-with-time-windows'

new PipelineWithChangeControl(scope: Construct, id: string, props: PipelineWithChangeControlProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControl.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControl.Initializer.parameter.props">props</a></code> | <code><a href="#pipeline-with-time-windows.PipelineWithChangeControlProps">PipelineWithChangeControlProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pipeline-with-time-windows.PipelineWithChangeControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pipeline-with-time-windows.PipelineWithChangeControl.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="pipeline-with-time-windows.PipelineWithChangeControl.Initializer.parameter.props"></a>

- *Type:* <a href="#pipeline-with-time-windows.PipelineWithChangeControlProps">PipelineWithChangeControlProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControl.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="pipeline-with-time-windows.PipelineWithChangeControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="pipeline-with-time-windows.PipelineWithChangeControl.isConstruct"></a>

```typescript
import { PipelineWithChangeControl } from 'pipeline-with-time-windows'

PipelineWithChangeControl.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="pipeline-with-time-windows.PipelineWithChangeControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="pipeline-with-time-windows.PipelineWithChangeControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### CalendarLocationOptionsBase <a name="CalendarLocationOptionsBase" id="pipeline-with-time-windows.CalendarLocationOptionsBase"></a>

Options for creating a calendar object.

#### Initializer <a name="Initializer" id="pipeline-with-time-windows.CalendarLocationOptionsBase.Initializer"></a>

```typescript
import { CalendarLocationOptionsBase } from 'pipeline-with-time-windows'

const calendarLocationOptionsBase: CalendarLocationOptionsBase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pipeline-with-time-windows.CalendarLocationOptionsBase.property.calendarName">calendarName</a></code> | <code>string</code> | The name of the calendar file. |

---

##### `calendarName`<sup>Required</sup> <a name="calendarName" id="pipeline-with-time-windows.CalendarLocationOptionsBase.property.calendarName"></a>

```typescript
public readonly calendarName: string;
```

- *Type:* string

The name of the calendar file.

---

### ChangeControllerProps <a name="ChangeControllerProps" id="pipeline-with-time-windows.ChangeControllerProps"></a>

Properties used to create change controller.

#### Initializer <a name="Initializer" id="pipeline-with-time-windows.ChangeControllerProps.Initializer"></a>

```typescript
import { ChangeControllerProps } from 'pipeline-with-time-windows'

const changeControllerProps: ChangeControllerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pipeline-with-time-windows.ChangeControllerProps.property.calendar">calendar</a></code> | <code><a href="#pipeline-with-time-windows.Calendar">Calendar</a></code> | The calendar object. |
| <code><a href="#pipeline-with-time-windows.ChangeControllerProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule on which to check the calendar and alarm state. |
| <code><a href="#pipeline-with-time-windows.ChangeControllerProps.property.searchTerms">searchTerms</a></code> | <code>string[]</code> | The terms to search for in alarm descriptions. |
| <code><a href="#pipeline-with-time-windows.ChangeControllerProps.property.stage">stage</a></code> | <code>aws-cdk-lib.aws_codepipeline.IStage</code> | The pipeline stage. |

---

##### `calendar`<sup>Required</sup> <a name="calendar" id="pipeline-with-time-windows.ChangeControllerProps.property.calendar"></a>

```typescript
public readonly calendar: Calendar;
```

- *Type:* <a href="#pipeline-with-time-windows.Calendar">Calendar</a>

The calendar object.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="pipeline-with-time-windows.ChangeControllerProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

The schedule on which to check the calendar and alarm state.

---

##### `searchTerms`<sup>Required</sup> <a name="searchTerms" id="pipeline-with-time-windows.ChangeControllerProps.property.searchTerms"></a>

```typescript
public readonly searchTerms: string[];
```

- *Type:* string[]

The terms to search for in alarm descriptions.

These if these alarms are in ALARM state, the change controller will close
the pipeline stage.

---

##### `stage`<sup>Required</sup> <a name="stage" id="pipeline-with-time-windows.ChangeControllerProps.property.stage"></a>

```typescript
public readonly stage: IStage;
```

- *Type:* aws-cdk-lib.aws_codepipeline.IStage

The pipeline stage.

---

### LocalPathOptions <a name="LocalPathOptions" id="pipeline-with-time-windows.LocalPathOptions"></a>

Options for creating a calendar from a local file path.

#### Initializer <a name="Initializer" id="pipeline-with-time-windows.LocalPathOptions.Initializer"></a>

```typescript
import { LocalPathOptions } from 'pipeline-with-time-windows'

const localPathOptions: LocalPathOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pipeline-with-time-windows.LocalPathOptions.property.calendarName">calendarName</a></code> | <code>string</code> | The name of the calendar file. |
| <code><a href="#pipeline-with-time-windows.LocalPathOptions.property.calendarPath">calendarPath</a></code> | <code>string</code> | The relative path to the calendar file. |

---

##### `calendarName`<sup>Required</sup> <a name="calendarName" id="pipeline-with-time-windows.LocalPathOptions.property.calendarName"></a>

```typescript
public readonly calendarName: string;
```

- *Type:* string

The name of the calendar file.

---

##### `calendarPath`<sup>Required</sup> <a name="calendarPath" id="pipeline-with-time-windows.LocalPathOptions.property.calendarPath"></a>

```typescript
public readonly calendarPath: string;
```

- *Type:* string

The relative path to the calendar file.

---

### PipelineWithChangeControlProps <a name="PipelineWithChangeControlProps" id="pipeline-with-time-windows.PipelineWithChangeControlProps"></a>

Props for creating a pipeline with a change controller.

#### Initializer <a name="Initializer" id="pipeline-with-time-windows.PipelineWithChangeControlProps.Initializer"></a>

```typescript
import { PipelineWithChangeControlProps } from 'pipeline-with-time-windows'

const pipelineWithChangeControlProps: PipelineWithChangeControlProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControlProps.property.changeControlCalendar">changeControlCalendar</a></code> | <code><a href="#pipeline-with-time-windows.Calendar">Calendar</a></code> | The calendar used for determining time windows. |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControlProps.property.changeControlCheckSchedule">changeControlCheckSchedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule on which to check the calendar. |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControlProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The name of the pipeline. |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControlProps.property.searchTerms">searchTerms</a></code> | <code>string[]</code> | The terms in the alarm descriptions to search for. |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControlProps.property.sourceRepository">sourceRepository</a></code> | <code>aws-cdk-lib.aws_codecommit.IRepository</code> | The AWS CodeCommit repository to be used as the source stage. |
| <code><a href="#pipeline-with-time-windows.PipelineWithChangeControlProps.property.pipelineRole">pipelineRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used for running the pipeline. |

---

##### `changeControlCalendar`<sup>Required</sup> <a name="changeControlCalendar" id="pipeline-with-time-windows.PipelineWithChangeControlProps.property.changeControlCalendar"></a>

```typescript
public readonly changeControlCalendar: Calendar;
```

- *Type:* <a href="#pipeline-with-time-windows.Calendar">Calendar</a>

The calendar used for determining time windows.

---

##### `changeControlCheckSchedule`<sup>Required</sup> <a name="changeControlCheckSchedule" id="pipeline-with-time-windows.PipelineWithChangeControlProps.property.changeControlCheckSchedule"></a>

```typescript
public readonly changeControlCheckSchedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

The schedule on which to check the calendar.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="pipeline-with-time-windows.PipelineWithChangeControlProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The name of the pipeline.

---

##### `searchTerms`<sup>Required</sup> <a name="searchTerms" id="pipeline-with-time-windows.PipelineWithChangeControlProps.property.searchTerms"></a>

```typescript
public readonly searchTerms: string[];
```

- *Type:* string[]

The terms in the alarm descriptions to search for.

These if the alarms containing those search terms are in ALARM,
the stage transition will be closed.

---

##### `sourceRepository`<sup>Required</sup> <a name="sourceRepository" id="pipeline-with-time-windows.PipelineWithChangeControlProps.property.sourceRepository"></a>

```typescript
public readonly sourceRepository: IRepository;
```

- *Type:* aws-cdk-lib.aws_codecommit.IRepository

The AWS CodeCommit repository to be used as the source stage.

---

##### `pipelineRole`<sup>Optional</sup> <a name="pipelineRole" id="pipeline-with-time-windows.PipelineWithChangeControlProps.property.pipelineRole"></a>

```typescript
public readonly pipelineRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created when the pipeline is created.

The role used for running the pipeline.

---

### S3LocationOptions <a name="S3LocationOptions" id="pipeline-with-time-windows.S3LocationOptions"></a>

Options for creating a calendar from a file in a S3 Bucket.

#### Initializer <a name="Initializer" id="pipeline-with-time-windows.S3LocationOptions.Initializer"></a>

```typescript
import { S3LocationOptions } from 'pipeline-with-time-windows'

const s3LocationOptions: S3LocationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pipeline-with-time-windows.S3LocationOptions.property.calendarName">calendarName</a></code> | <code>string</code> | The name of the calendar file. |
| <code><a href="#pipeline-with-time-windows.S3LocationOptions.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket where the calendar is stored. |
| <code><a href="#pipeline-with-time-windows.S3LocationOptions.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used for getting the calendar file. |

---

##### `calendarName`<sup>Required</sup> <a name="calendarName" id="pipeline-with-time-windows.S3LocationOptions.property.calendarName"></a>

```typescript
public readonly calendarName: string;
```

- *Type:* string

The name of the calendar file.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="pipeline-with-time-windows.S3LocationOptions.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket where the calendar is stored.

---

##### `role`<sup>Optional</sup> <a name="role" id="pipeline-with-time-windows.S3LocationOptions.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A role created by the Custom Resource.

The role used for getting the calendar file.

---

## Classes <a name="Classes" id="Classes"></a>

### Calendar <a name="Calendar" id="pipeline-with-time-windows.Calendar"></a>

The calendar for determining if pipeline stage should be open or closed.

#### Initializers <a name="Initializers" id="pipeline-with-time-windows.Calendar.Initializer"></a>

```typescript
import { Calendar } from 'pipeline-with-time-windows'

new Calendar()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pipeline-with-time-windows.Calendar.path">path</a></code> | Creates a calendar from a local file. |
| <code><a href="#pipeline-with-time-windows.Calendar.s3Location">s3Location</a></code> | Creates a calendar from an S3 bucket. |

---

##### `path` <a name="path" id="pipeline-with-time-windows.Calendar.path"></a>

```typescript
import { Calendar } from 'pipeline-with-time-windows'

Calendar.path(options: LocalPathOptions)
```

Creates a calendar from a local file.

###### `options`<sup>Required</sup> <a name="options" id="pipeline-with-time-windows.Calendar.path.parameter.options"></a>

- *Type:* <a href="#pipeline-with-time-windows.LocalPathOptions">LocalPathOptions</a>

---

##### `s3Location` <a name="s3Location" id="pipeline-with-time-windows.Calendar.s3Location"></a>

```typescript
import { Calendar } from 'pipeline-with-time-windows'

Calendar.s3Location(options: S3LocationOptions)
```

Creates a calendar from an S3 bucket.

###### `options`<sup>Required</sup> <a name="options" id="pipeline-with-time-windows.Calendar.s3Location.parameter.options"></a>

- *Type:* <a href="#pipeline-with-time-windows.S3LocationOptions">S3LocationOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pipeline-with-time-windows.Calendar.property.calendarArn">calendarArn</a></code> | <code>string</code> | The ARN of the calendar in SSM. |
| <code><a href="#pipeline-with-time-windows.Calendar.property.calendarName">calendarName</a></code> | <code>string</code> | The name of the calendar. |

---

##### `calendarArn`<sup>Required</sup> <a name="calendarArn" id="pipeline-with-time-windows.Calendar.property.calendarArn"></a>

```typescript
public readonly calendarArn: string;
```

- *Type:* string

The ARN of the calendar in SSM.

---

##### `calendarName`<sup>Required</sup> <a name="calendarName" id="pipeline-with-time-windows.Calendar.property.calendarName"></a>

```typescript
public readonly calendarName: string;
```

- *Type:* string

The name of the calendar.

---



## Enums <a name="Enums" id="Enums"></a>

### CalendarSourceType <a name="CalendarSourceType" id="pipeline-with-time-windows.CalendarSourceType"></a>

The source types for the calendar file.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pipeline-with-time-windows.CalendarSourceType.PATH">PATH</a></code> | The calendar source is a local path. |
| <code><a href="#pipeline-with-time-windows.CalendarSourceType.S3_OBJECT">S3_OBJECT</a></code> | The calendar source is an S3 Bucket. |

---

##### `PATH` <a name="PATH" id="pipeline-with-time-windows.CalendarSourceType.PATH"></a>

The calendar source is a local path.

---


##### `S3_OBJECT` <a name="S3_OBJECT" id="pipeline-with-time-windows.CalendarSourceType.S3_OBJECT"></a>

The calendar source is an S3 Bucket.

---

