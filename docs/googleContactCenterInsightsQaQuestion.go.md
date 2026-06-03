# `googleContactCenterInsightsQaQuestion` Submodule <a name="`googleContactCenterInsightsQaQuestion` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsQaQuestion <a name="GoogleContactCenterInsightsQaQuestion" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question google_contact_center_insights_qa_question}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.NewGoogleContactCenterInsightsQaQuestion(scope Construct, id *string, config GoogleContactCenterInsightsQaQuestionConfig) GoogleContactCenterInsightsQaQuestion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig">GoogleContactCenterInsightsQaQuestionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig">GoogleContactCenterInsightsQaQuestionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putAnswerChoices">PutAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putMetrics">PutMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putPredefinedQuestionConfig">PutPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putQaQuestionDataOptions">PutQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata">PutTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAbbreviation">ResetAbbreviation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerChoices">ResetAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerInstructions">ResetAnswerInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetMetrics">ResetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig">ResetPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQaQuestionDataOptions">ResetQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionBody">ResetQuestionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionType">ResetQuestionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTuningMetadata">ResetTuningMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnswerChoices` <a name="PutAnswerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putAnswerChoices"></a>

```go
func PutAnswerChoices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putAnswerChoices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetrics` <a name="PutMetrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putMetrics"></a>

```go
func PutMetrics(value GoogleContactCenterInsightsQaQuestionMetrics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

---

##### `PutPredefinedQuestionConfig` <a name="PutPredefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putPredefinedQuestionConfig"></a>

```go
func PutPredefinedQuestionConfig(value GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putPredefinedQuestionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `PutQaQuestionDataOptions` <a name="PutQaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putQaQuestionDataOptions"></a>

```go
func PutQaQuestionDataOptions(value GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putQaQuestionDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts"></a>

```go
func PutTimeouts(value GoogleContactCenterInsightsQaQuestionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

---

##### `PutTuningMetadata` <a name="PutTuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata"></a>

```go
func PutTuningMetadata(value GoogleContactCenterInsightsQaQuestionTuningMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `ResetAbbreviation` <a name="ResetAbbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAbbreviation"></a>

```go
func ResetAbbreviation()
```

##### `ResetAnswerChoices` <a name="ResetAnswerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerChoices"></a>

```go
func ResetAnswerChoices()
```

##### `ResetAnswerInstructions` <a name="ResetAnswerInstructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerInstructions"></a>

```go
func ResetAnswerInstructions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetId"></a>

```go
func ResetId()
```

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetMetrics"></a>

```go
func ResetMetrics()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPredefinedQuestionConfig` <a name="ResetPredefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig"></a>

```go
func ResetPredefinedQuestionConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQaQuestionDataOptions` <a name="ResetQaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQaQuestionDataOptions"></a>

```go
func ResetQaQuestionDataOptions()
```

##### `ResetQuestionBody` <a name="ResetQuestionBody" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionBody"></a>

```go
func ResetQuestionBody()
```

##### `ResetQuestionType` <a name="ResetQuestionType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionType"></a>

```go
func ResetQuestionType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTuningMetadata` <a name="ResetTuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTuningMetadata"></a>

```go
func ResetTuningMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestion_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleContactCenterInsightsQaQuestion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleContactCenterInsightsQaQuestion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsQaQuestion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoices">AnswerChoices</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList">GoogleContactCenterInsightsQaQuestionAnswerChoicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference">GoogleContactCenterInsightsQaQuestionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfig">PredefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptions">QaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference">GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadata">TuningMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference">GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviationInput">AbbreviationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoicesInput">AnswerChoicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructionsInput">AnswerInstructionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metricsInput">MetricsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput">PredefinedQuestionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput">QaQuestionDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecardInput">QaScorecardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBodyInput">QuestionBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionTypeInput">QuestionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadataInput">TuningMetadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviation">Abbreviation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructions">AnswerInstructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecard">QaScorecard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBody">QuestionBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionType">QuestionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnswerChoices`<sup>Required</sup> <a name="AnswerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoices"></a>

```go
func AnswerChoices() GoogleContactCenterInsightsQaQuestionAnswerChoicesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList">GoogleContactCenterInsightsQaQuestionAnswerChoicesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metrics"></a>

```go
func Metrics() GoogleContactCenterInsightsQaQuestionMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference">GoogleContactCenterInsightsQaQuestionMetricsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PredefinedQuestionConfig`<sup>Required</sup> <a name="PredefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfig"></a>

```go
func PredefinedQuestionConfig() GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a>

---

##### `QaQuestionDataOptions`<sup>Required</sup> <a name="QaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptions"></a>

```go
func QaQuestionDataOptions() GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeouts"></a>

```go
func Timeouts() GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference">GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference</a>

---

##### `TuningMetadata`<sup>Required</sup> <a name="TuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadata"></a>

```go
func TuningMetadata() GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference">GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AbbreviationInput`<sup>Optional</sup> <a name="AbbreviationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviationInput"></a>

```go
func AbbreviationInput() *string
```

- *Type:* *string

---

##### `AnswerChoicesInput`<sup>Optional</sup> <a name="AnswerChoicesInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoicesInput"></a>

```go
func AnswerChoicesInput() interface{}
```

- *Type:* interface{}

---

##### `AnswerInstructionsInput`<sup>Optional</sup> <a name="AnswerInstructionsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructionsInput"></a>

```go
func AnswerInstructionsInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metricsInput"></a>

```go
func MetricsInput() GoogleContactCenterInsightsQaQuestionMetrics
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `PredefinedQuestionConfigInput`<sup>Optional</sup> <a name="PredefinedQuestionConfigInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput"></a>

```go
func PredefinedQuestionConfigInput() GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QaQuestionDataOptionsInput`<sup>Optional</sup> <a name="QaQuestionDataOptionsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput"></a>

```go
func QaQuestionDataOptionsInput() GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `QaScorecardInput`<sup>Optional</sup> <a name="QaScorecardInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecardInput"></a>

```go
func QaScorecardInput() *string
```

- *Type:* *string

---

##### `QuestionBodyInput`<sup>Optional</sup> <a name="QuestionBodyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBodyInput"></a>

```go
func QuestionBodyInput() *string
```

- *Type:* *string

---

##### `QuestionTypeInput`<sup>Optional</sup> <a name="QuestionTypeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionTypeInput"></a>

```go
func QuestionTypeInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TuningMetadataInput`<sup>Optional</sup> <a name="TuningMetadataInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadataInput"></a>

```go
func TuningMetadataInput() GoogleContactCenterInsightsQaQuestionTuningMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `Abbreviation`<sup>Required</sup> <a name="Abbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviation"></a>

```go
func Abbreviation() *string
```

- *Type:* *string

---

##### `AnswerInstructions`<sup>Required</sup> <a name="AnswerInstructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructions"></a>

```go
func AnswerInstructions() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecard"></a>

```go
func QaScorecard() *string
```

- *Type:* *string

---

##### `QuestionBody`<sup>Required</sup> <a name="QuestionBody" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBody"></a>

```go
func QuestionBody() *string
```

- *Type:* *string

---

##### `QuestionType`<sup>Required</sup> <a name="QuestionType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionType"></a>

```go
func QuestionType() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsQaQuestionAnswerChoices <a name="GoogleContactCenterInsightsQaQuestionAnswerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

&googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestionAnswerChoices {
	BoolValue: interface{},
	Key: *string,
	NaValue: interface{},
	NumValue: *f64,
	Score: *f64,
	StrValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.key">Key</a></code> | <code>*string</code> | A short string used as an identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.naValue">NaValue</a></code> | <code>interface{}</code> | A value of "Not Applicable (N/A)". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.numValue">NumValue</a></code> | <code>*f64</code> | Numerical value. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.score">Score</a></code> | <code>*f64</code> | Numerical score of the answer, used for generating the overall score of a QaScorecardResult. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.strValue">StrValue</a></code> | <code>*string</code> | String value. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#bool_value GoogleContactCenterInsightsQaQuestion#bool_value}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.key"></a>

```go
Key *string
```

- *Type:* *string

A short string used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#key GoogleContactCenterInsightsQaQuestion#key}

---

##### `NaValue`<sup>Optional</sup> <a name="NaValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.naValue"></a>

```go
NaValue interface{}
```

- *Type:* interface{}

A value of "Not Applicable (N/A)".

If provided, this field may only
be set to 'true'. If a question receives this answer, it will be
excluded from any score calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#na_value GoogleContactCenterInsightsQaQuestion#na_value}

---

##### `NumValue`<sup>Optional</sup> <a name="NumValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.numValue"></a>

```go
NumValue *f64
```

- *Type:* *f64

Numerical value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#num_value GoogleContactCenterInsightsQaQuestion#num_value}

---

##### `Score`<sup>Optional</sup> <a name="Score" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.score"></a>

```go
Score *f64
```

- *Type:* *f64

Numerical score of the answer, used for generating the overall score of a QaScorecardResult.

If the answer uses na_value, this field is unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#score GoogleContactCenterInsightsQaQuestion#score}

---

##### `StrValue`<sup>Optional</sup> <a name="StrValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.strValue"></a>

```go
StrValue *string
```

- *Type:* *string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#str_value GoogleContactCenterInsightsQaQuestion#str_value}

---

### GoogleContactCenterInsightsQaQuestionConfig <a name="GoogleContactCenterInsightsQaQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

&googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	QaScorecard: *string,
	Revision: *string,
	Abbreviation: *string,
	AnswerChoices: interface{},
	AnswerInstructions: *string,
	DeletionPolicy: *string,
	Id: *string,
	Metrics: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics,
	Order: *f64,
	PredefinedQuestionConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig,
	Project: *string,
	QaQuestionDataOptions: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions,
	QuestionBody: *string,
	QuestionType: *string,
	Tags: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts,
	TuningMetadata: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaScorecard">QaScorecard</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.revision">Revision</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.abbreviation">Abbreviation</a></code> | <code>*string</code> | Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerChoices">AnswerChoices</a></code> | <code>interface{}</code> | answer_choices block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerInstructions">AnswerInstructions</a></code> | <code>*string</code> | Instructions describing how to determine the answer. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#id GoogleContactCenterInsightsQaQuestion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | metrics block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.order">Order</a></code> | <code>*f64</code> | Defines the order of the question within its parent scorecard revision. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig">PredefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | predefined_question_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#project GoogleContactCenterInsightsQaQuestion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions">QaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | qa_question_data_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionBody">QuestionBody</a></code> | <code>*string</code> | Question text. E.g., "Did the agent greet the customer?". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionType">QuestionType</a></code> | <code>*string</code> | The type of question. Possible values: CUSTOMIZABLE PREDEFINED. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Questions are tagged for categorization and scoring. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tuningMetadata">TuningMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | tuning_metadata block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#location GoogleContactCenterInsightsQaQuestion#location}

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaScorecard"></a>

```go
QaScorecard *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#qa_scorecard GoogleContactCenterInsightsQaQuestion#qa_scorecard}

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#revision GoogleContactCenterInsightsQaQuestion#revision}

---

##### `Abbreviation`<sup>Optional</sup> <a name="Abbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.abbreviation"></a>

```go
Abbreviation *string
```

- *Type:* *string

Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#abbreviation GoogleContactCenterInsightsQaQuestion#abbreviation}

---

##### `AnswerChoices`<sup>Optional</sup> <a name="AnswerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerChoices"></a>

```go
AnswerChoices interface{}
```

- *Type:* interface{}

answer_choices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#answer_choices GoogleContactCenterInsightsQaQuestion#answer_choices}

---

##### `AnswerInstructions`<sup>Optional</sup> <a name="AnswerInstructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerInstructions"></a>

```go
AnswerInstructions *string
```

- *Type:* *string

Instructions describing how to determine the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#answer_instructions GoogleContactCenterInsightsQaQuestion#answer_instructions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#deletion_policy GoogleContactCenterInsightsQaQuestion#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#id GoogleContactCenterInsightsQaQuestion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.metrics"></a>

```go
Metrics GoogleContactCenterInsightsQaQuestionMetrics
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#metrics GoogleContactCenterInsightsQaQuestion#metrics}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Defines the order of the question within its parent scorecard revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#order GoogleContactCenterInsightsQaQuestion#order}

---

##### `PredefinedQuestionConfig`<sup>Optional</sup> <a name="PredefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig"></a>

```go
PredefinedQuestionConfig GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

predefined_question_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#predefined_question_config GoogleContactCenterInsightsQaQuestion#predefined_question_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#project GoogleContactCenterInsightsQaQuestion#project}.

---

##### `QaQuestionDataOptions`<sup>Optional</sup> <a name="QaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions"></a>

```go
QaQuestionDataOptions GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

qa_question_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#qa_question_data_options GoogleContactCenterInsightsQaQuestion#qa_question_data_options}

---

##### `QuestionBody`<sup>Optional</sup> <a name="QuestionBody" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionBody"></a>

```go
QuestionBody *string
```

- *Type:* *string

Question text. E.g., "Did the agent greet the customer?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#question_body GoogleContactCenterInsightsQaQuestion#question_body}

---

##### `QuestionType`<sup>Optional</sup> <a name="QuestionType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionType"></a>

```go
QuestionType *string
```

- *Type:* *string

The type of question. Possible values: CUSTOMIZABLE PREDEFINED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#question_type GoogleContactCenterInsightsQaQuestion#question_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Questions are tagged for categorization and scoring.

Tags can either be:

* Default Tags: These are predefined categories. They are identified by
  their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
* Custom Tags: These are user-defined categories. They are identified by
  their full resource name (e.g.,
  projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
  Both default and custom tags are used to group questions and to influence
  the scoring of each question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#tags GoogleContactCenterInsightsQaQuestion#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.timeouts"></a>

```go
Timeouts GoogleContactCenterInsightsQaQuestionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#timeouts GoogleContactCenterInsightsQaQuestion#timeouts}

---

##### `TuningMetadata`<sup>Optional</sup> <a name="TuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tuningMetadata"></a>

```go
TuningMetadata GoogleContactCenterInsightsQaQuestionTuningMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

tuning_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#tuning_metadata GoogleContactCenterInsightsQaQuestion#tuning_metadata}

---

### GoogleContactCenterInsightsQaQuestionMetrics <a name="GoogleContactCenterInsightsQaQuestionMetrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

&googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestionMetrics {

}
```


### GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig <a name="GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

&googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type">Type</a></code> | <code>*string</code> | The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#type GoogleContactCenterInsightsQaQuestion#type}

---

### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

&googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions {
	ConversationDataOptions: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions">ConversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | conversation_data_options block. |

---

##### `ConversationDataOptions`<sup>Optional</sup> <a name="ConversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions"></a>

```go
ConversationDataOptions GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

conversation_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#conversation_data_options GoogleContactCenterInsightsQaQuestion#conversation_data_options}

---

### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

&googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions {
	IncludeDialogflowInteractionData: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData">IncludeDialogflowInteractionData</a></code> | <code>interface{}</code> | Whether to include the per turn Dialogflow interaction data in conversation transcript. |

---

##### `IncludeDialogflowInteractionData`<sup>Optional</sup> <a name="IncludeDialogflowInteractionData" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData"></a>

```go
IncludeDialogflowInteractionData interface{}
```

- *Type:* interface{}

Whether to include the per turn Dialogflow interaction data in conversation transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#include_dialogflow_interaction_data GoogleContactCenterInsightsQaQuestion#include_dialogflow_interaction_data}

---

### GoogleContactCenterInsightsQaQuestionTimeouts <a name="GoogleContactCenterInsightsQaQuestionTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

&googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#create GoogleContactCenterInsightsQaQuestion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#delete GoogleContactCenterInsightsQaQuestion#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#update GoogleContactCenterInsightsQaQuestion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#create GoogleContactCenterInsightsQaQuestion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#delete GoogleContactCenterInsightsQaQuestion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#update GoogleContactCenterInsightsQaQuestion#update}.

---

### GoogleContactCenterInsightsQaQuestionTuningMetadata <a name="GoogleContactCenterInsightsQaQuestionTuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

&googlecontactcenterinsightsqaquestion.GoogleContactCenterInsightsQaQuestionTuningMetadata {
	DatasetValidationWarnings: *[]*string,
	TotalValidLabelCount: *string,
	TuningError: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings">DatasetValidationWarnings</a></code> | <code>*[]*string</code> | A list of any applicable data validation warnings about the question's feedback labels. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount">TotalValidLabelCount</a></code> | <code>*string</code> | Total number of valid labels provided for the question at the time of tuining. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.tuningError">TuningError</a></code> | <code>*string</code> | Error status of the tuning operation for the question. Will only be set if the tuning operation failed. |

---

##### `DatasetValidationWarnings`<sup>Optional</sup> <a name="DatasetValidationWarnings" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings"></a>

```go
DatasetValidationWarnings *[]*string
```

- *Type:* *[]*string

A list of any applicable data validation warnings about the question's feedback labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#dataset_validation_warnings GoogleContactCenterInsightsQaQuestion#dataset_validation_warnings}

---

##### `TotalValidLabelCount`<sup>Optional</sup> <a name="TotalValidLabelCount" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount"></a>

```go
TotalValidLabelCount *string
```

- *Type:* *string

Total number of valid labels provided for the question at the time of tuining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#total_valid_label_count GoogleContactCenterInsightsQaQuestion#total_valid_label_count}

---

##### `TuningError`<sup>Optional</sup> <a name="TuningError" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.tuningError"></a>

```go
TuningError *string
```

- *Type:* *string

Error status of the tuning operation for the question. Will only be set if the tuning operation failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_contact_center_insights_qa_question#tuning_error GoogleContactCenterInsightsQaQuestion#tuning_error}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsQaQuestionAnswerChoicesList <a name="GoogleContactCenterInsightsQaQuestionAnswerChoicesList" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.NewGoogleContactCenterInsightsQaQuestionAnswerChoicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleContactCenterInsightsQaQuestionAnswerChoicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.get"></a>

```go
func Get(index *f64) GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference <a name="GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.NewGoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue">ResetNaValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue">ResetNumValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore">ResetScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue">ResetStrValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetNaValue` <a name="ResetNaValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue"></a>

```go
func ResetNaValue()
```

##### `ResetNumValue` <a name="ResetNumValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue"></a>

```go
func ResetNumValue()
```

##### `ResetScore` <a name="ResetScore" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore"></a>

```go
func ResetScore()
```

##### `ResetStrValue` <a name="ResetStrValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue"></a>

```go
func ResetStrValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput">NaValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput">NumValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput">ScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput">StrValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue">NaValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue">NumValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score">Score</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue">StrValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NaValueInput`<sup>Optional</sup> <a name="NaValueInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput"></a>

```go
func NaValueInput() interface{}
```

- *Type:* interface{}

---

##### `NumValueInput`<sup>Optional</sup> <a name="NumValueInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput"></a>

```go
func NumValueInput() *f64
```

- *Type:* *f64

---

##### `ScoreInput`<sup>Optional</sup> <a name="ScoreInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput"></a>

```go
func ScoreInput() *f64
```

- *Type:* *f64

---

##### `StrValueInput`<sup>Optional</sup> <a name="StrValueInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput"></a>

```go
func StrValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `NaValue`<sup>Required</sup> <a name="NaValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue"></a>

```go
func NaValue() interface{}
```

- *Type:* interface{}

---

##### `NumValue`<sup>Required</sup> <a name="NumValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue"></a>

```go
func NumValue() *f64
```

- *Type:* *f64

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score"></a>

```go
func Score() *f64
```

- *Type:* *f64

---

##### `StrValue`<sup>Required</sup> <a name="StrValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue"></a>

```go
func StrValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleContactCenterInsightsQaQuestionMetricsOutputReference <a name="GoogleContactCenterInsightsQaQuestionMetricsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.NewGoogleContactCenterInsightsQaQuestionMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContactCenterInsightsQaQuestionMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy">Accuracy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Accuracy`<sup>Required</sup> <a name="Accuracy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy"></a>

```go
func Accuracy() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContactCenterInsightsQaQuestionMetrics
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

---


### GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference <a name="GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.NewGoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---


### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.NewGoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData">ResetIncludeDialogflowInteractionData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeDialogflowInteractionData` <a name="ResetIncludeDialogflowInteractionData" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData"></a>

```go
func ResetIncludeDialogflowInteractionData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput">IncludeDialogflowInteractionDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData">IncludeDialogflowInteractionData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeDialogflowInteractionDataInput`<sup>Optional</sup> <a name="IncludeDialogflowInteractionDataInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput"></a>

```go
func IncludeDialogflowInteractionDataInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeDialogflowInteractionData`<sup>Required</sup> <a name="IncludeDialogflowInteractionData" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData"></a>

```go
func IncludeDialogflowInteractionData() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---


### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.NewGoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions">PutConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions">ResetConversationDataOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConversationDataOptions` <a name="PutConversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions"></a>

```go
func PutConversationDataOptions(value GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `ResetConversationDataOptions` <a name="ResetConversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions"></a>

```go
func ResetConversationDataOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions">ConversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput">ConversationDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConversationDataOptions`<sup>Required</sup> <a name="ConversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions"></a>

```go
func ConversationDataOptions() GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a>

---

##### `ConversationDataOptionsInput`<sup>Optional</sup> <a name="ConversationDataOptionsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput"></a>

```go
func ConversationDataOptionsInput() GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---


### GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference <a name="GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.NewGoogleContactCenterInsightsQaQuestionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference <a name="GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqaquestion"

googlecontactcenterinsightsqaquestion.NewGoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings">ResetDatasetValidationWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount">ResetTotalValidLabelCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError">ResetTuningError</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetValidationWarnings` <a name="ResetDatasetValidationWarnings" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings"></a>

```go
func ResetDatasetValidationWarnings()
```

##### `ResetTotalValidLabelCount` <a name="ResetTotalValidLabelCount" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount"></a>

```go
func ResetTotalValidLabelCount()
```

##### `ResetTuningError` <a name="ResetTuningError" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError"></a>

```go
func ResetTuningError()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput">DatasetValidationWarningsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput">TotalValidLabelCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput">TuningErrorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings">DatasetValidationWarnings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount">TotalValidLabelCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError">TuningError</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetValidationWarningsInput`<sup>Optional</sup> <a name="DatasetValidationWarningsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput"></a>

```go
func DatasetValidationWarningsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TotalValidLabelCountInput`<sup>Optional</sup> <a name="TotalValidLabelCountInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput"></a>

```go
func TotalValidLabelCountInput() *string
```

- *Type:* *string

---

##### `TuningErrorInput`<sup>Optional</sup> <a name="TuningErrorInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput"></a>

```go
func TuningErrorInput() *string
```

- *Type:* *string

---

##### `DatasetValidationWarnings`<sup>Required</sup> <a name="DatasetValidationWarnings" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings"></a>

```go
func DatasetValidationWarnings() *[]*string
```

- *Type:* *[]*string

---

##### `TotalValidLabelCount`<sup>Required</sup> <a name="TotalValidLabelCount" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount"></a>

```go
func TotalValidLabelCount() *string
```

- *Type:* *string

---

##### `TuningError`<sup>Required</sup> <a name="TuningError" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError"></a>

```go
func TuningError() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContactCenterInsightsQaQuestionTuningMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

---



