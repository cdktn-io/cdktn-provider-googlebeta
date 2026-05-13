# `googleContactCenterInsightsQaScorecardRevision` Submodule <a name="`googleContactCenterInsightsQaScorecardRevision` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsQaScorecardRevision <a name="GoogleContactCenterInsightsQaScorecardRevision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision google_contact_center_insights_qa_scorecard_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

googlecontactcenterinsightsqascorecardrevision.NewGoogleContactCenterInsightsQaScorecardRevision(scope Construct, id *string, config GoogleContactCenterInsightsQaScorecardRevisionConfig) GoogleContactCenterInsightsQaScorecardRevision
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig">GoogleContactCenterInsightsQaScorecardRevisionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig">GoogleContactCenterInsightsQaScorecardRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId">ResetQaScorecardRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts"></a>

```go
func PutTimeouts(value GoogleContactCenterInsightsQaScorecardRevisionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQaScorecardRevisionId` <a name="ResetQaScorecardRevisionId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId"></a>

```go
func ResetQaScorecardRevisionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

googlecontactcenterinsightsqascorecardrevision.GoogleContactCenterInsightsQaScorecardRevision_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

googlecontactcenterinsightsqascorecardrevision.GoogleContactCenterInsightsQaScorecardRevision_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

googlecontactcenterinsightsqascorecardrevision.GoogleContactCenterInsightsQaScorecardRevision_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

googlecontactcenterinsightsqascorecardrevision.GoogleContactCenterInsightsQaScorecardRevision_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleContactCenterInsightsQaScorecardRevision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleContactCenterInsightsQaScorecardRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsQaScorecardRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.alternateIds">AlternateIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList">GoogleContactCenterInsightsQaScorecardRevisionSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardInput">QaScorecardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput">QaScorecardRevisionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecard">QaScorecard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId">QaScorecardRevisionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlternateIds`<sup>Required</sup> <a name="AlternateIds" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.alternateIds"></a>

```go
func AlternateIds() *[]*string
```

- *Type:* *[]*string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.snapshot"></a>

```go
func Snapshot() GoogleContactCenterInsightsQaScorecardRevisionSnapshotList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList">GoogleContactCenterInsightsQaScorecardRevisionSnapshotList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeouts"></a>

```go
func Timeouts() GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QaScorecardInput`<sup>Optional</sup> <a name="QaScorecardInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardInput"></a>

```go
func QaScorecardInput() *string
```

- *Type:* *string

---

##### `QaScorecardRevisionIdInput`<sup>Optional</sup> <a name="QaScorecardRevisionIdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput"></a>

```go
func QaScorecardRevisionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecard"></a>

```go
func QaScorecard() *string
```

- *Type:* *string

---

##### `QaScorecardRevisionId`<sup>Required</sup> <a name="QaScorecardRevisionId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId"></a>

```go
func QaScorecardRevisionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsQaScorecardRevisionConfig <a name="GoogleContactCenterInsightsQaScorecardRevisionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

&googlecontactcenterinsightsqascorecardrevision.GoogleContactCenterInsightsQaScorecardRevisionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	QaScorecard: *string,
	Id: *string,
	Project: *string,
	QaScorecardRevisionId: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard">QaScorecard</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#id GoogleContactCenterInsightsQaScorecardRevision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#project GoogleContactCenterInsightsQaScorecardRevision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId">QaScorecardRevisionId</a></code> | <code>*string</code> | A unique ID for the new QaScorecardRevision. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#location GoogleContactCenterInsightsQaScorecardRevision#location}

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard"></a>

```go
QaScorecard *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#qa_scorecard GoogleContactCenterInsightsQaScorecardRevision#qa_scorecard}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#id GoogleContactCenterInsightsQaScorecardRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#project GoogleContactCenterInsightsQaScorecardRevision#project}.

---

##### `QaScorecardRevisionId`<sup>Optional</sup> <a name="QaScorecardRevisionId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId"></a>

```go
QaScorecardRevisionId *string
```

- *Type:* *string

A unique ID for the new QaScorecardRevision.

This ID will become the final
component of the QaScorecardRevision's resource name.
If no ID is specified this resource will get the latest revision on the given scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#qa_scorecard_revision_id GoogleContactCenterInsightsQaScorecardRevision#qa_scorecard_revision_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.timeouts"></a>

```go
Timeouts GoogleContactCenterInsightsQaScorecardRevisionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#timeouts GoogleContactCenterInsightsQaScorecardRevision#timeouts}

---

### GoogleContactCenterInsightsQaScorecardRevisionSnapshot <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshot" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

&googlecontactcenterinsightsqascorecardrevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot {

}
```


### GoogleContactCenterInsightsQaScorecardRevisionTimeouts <a name="GoogleContactCenterInsightsQaScorecardRevisionTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

&googlecontactcenterinsightsqascorecardrevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#create GoogleContactCenterInsightsQaScorecardRevision#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#delete GoogleContactCenterInsightsQaScorecardRevision#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#create GoogleContactCenterInsightsQaScorecardRevision#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#delete GoogleContactCenterInsightsQaScorecardRevision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsQaScorecardRevisionSnapshotList <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshotList" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

googlecontactcenterinsightsqascorecardrevision.NewGoogleContactCenterInsightsQaScorecardRevisionSnapshotList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleContactCenterInsightsQaScorecardRevisionSnapshotList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get"></a>

```go
func Get(index *f64) GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

googlecontactcenterinsightsqascorecardrevision.NewGoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault">IsDefault</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot">GoogleContactCenterInsightsQaScorecardRevisionSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContactCenterInsightsQaScorecardRevisionSnapshot
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot">GoogleContactCenterInsightsQaScorecardRevisionSnapshot</a>

---


### GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference <a name="GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecontactcenterinsightsqascorecardrevision"

googlecontactcenterinsightsqascorecardrevision.NewGoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



