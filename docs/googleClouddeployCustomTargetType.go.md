# `googleClouddeployCustomTargetType` Submodule <a name="`googleClouddeployCustomTargetType` Submodule" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployCustomTargetType <a name="GoogleClouddeployCustomTargetType" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type google_clouddeploy_custom_target_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetType(scope Construct, id *string, config GoogleClouddeployCustomTargetTypeConfig) GoogleClouddeployCustomTargetType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig">GoogleClouddeployCustomTargetTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig">GoogleClouddeployCustomTargetTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions">PutCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetCustomActions">ResetCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetTasks">ResetTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomActions` <a name="PutCustomActions" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions"></a>

```go
func PutCustomActions(value GoogleClouddeployCustomTargetTypeCustomActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

---

##### `PutTasks` <a name="PutTasks" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTasks"></a>

```go
func PutTasks(value GoogleClouddeployCustomTargetTypeTasks)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTasks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts"></a>

```go
func PutTimeouts(value GoogleClouddeployCustomTargetTypeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetCustomActions` <a name="ResetCustomActions" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetCustomActions"></a>

```go
func ResetCustomActions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTasks` <a name="ResetTasks" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetTasks"></a>

```go
func ResetTasks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleClouddeployCustomTargetType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetType_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleClouddeployCustomTargetType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleClouddeployCustomTargetType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleClouddeployCustomTargetType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployCustomTargetType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActions">CustomActions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customTargetTypeId">CustomTargetTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tasks">Tasks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference">GoogleClouddeployCustomTargetTypeTasksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference">GoogleClouddeployCustomTargetTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActionsInput">CustomActionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tasksInput">TasksInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomActions`<sup>Required</sup> <a name="CustomActions" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActions"></a>

```go
func CustomActions() GoogleClouddeployCustomTargetTypeCustomActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsOutputReference</a>

---

##### `CustomTargetTypeId`<sup>Required</sup> <a name="CustomTargetTypeId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customTargetTypeId"></a>

```go
func CustomTargetTypeId() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tasks"></a>

```go
func Tasks() GoogleClouddeployCustomTargetTypeTasksOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference">GoogleClouddeployCustomTargetTypeTasksOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeouts"></a>

```go
func Timeouts() GoogleClouddeployCustomTargetTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference">GoogleClouddeployCustomTargetTypeTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomActionsInput`<sup>Optional</sup> <a name="CustomActionsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActionsInput"></a>

```go
func CustomActionsInput() GoogleClouddeployCustomTargetTypeCustomActions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tasksInput"></a>

```go
func TasksInput() GoogleClouddeployCustomTargetTypeTasks
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployCustomTargetTypeConfig <a name="GoogleClouddeployCustomTargetTypeConfig" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Annotations: *map[string]*string,
	CustomActions: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Tasks: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.location">Location</a></code> | <code>*string</code> | The location of the source. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.name">Name</a></code> | <code>*string</code> | Name of the 'CustomTargetType'. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | User annotations. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.customActions">CustomActions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a></code> | custom_actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.description">Description</a></code> | <code>*string</code> | Description of the 'CustomTargetType'. Max length is 255 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#id GoogleClouddeployCustomTargetType#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels are attributes that can be set and used by both the user and by Cloud Deploy. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#project GoogleClouddeployCustomTargetType#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.tasks">Tasks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a></code> | tasks block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#location GoogleClouddeployCustomTargetType#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the 'CustomTargetType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#name GoogleClouddeployCustomTargetType#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

User annotations.

These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#annotations GoogleClouddeployCustomTargetType#annotations}

---

##### `CustomActions`<sup>Optional</sup> <a name="CustomActions" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.customActions"></a>

```go
CustomActions GoogleClouddeployCustomTargetTypeCustomActions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

custom_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#custom_actions GoogleClouddeployCustomTargetType#custom_actions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#deletion_policy GoogleClouddeployCustomTargetType#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the 'CustomTargetType'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#description GoogleClouddeployCustomTargetType#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#id GoogleClouddeployCustomTargetType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels are attributes that can be set and used by both the user and by Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#labels GoogleClouddeployCustomTargetType#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#project GoogleClouddeployCustomTargetType#project}.

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.tasks"></a>

```go
Tasks GoogleClouddeployCustomTargetTypeTasks
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#tasks GoogleClouddeployCustomTargetType#tasks}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.timeouts"></a>

```go
Timeouts GoogleClouddeployCustomTargetTypeTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#timeouts GoogleClouddeployCustomTargetType#timeouts}

---

### GoogleClouddeployCustomTargetTypeCustomActions <a name="GoogleClouddeployCustomTargetTypeCustomActions" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeCustomActions {
	DeployAction: *string,
	IncludeSkaffoldModules: interface{},
	RenderAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.deployAction">DeployAction</a></code> | <code>*string</code> | The Skaffold custom action responsible for deploy operations. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.includeSkaffoldModules">IncludeSkaffoldModules</a></code> | <code>interface{}</code> | include_skaffold_modules block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.renderAction">RenderAction</a></code> | <code>*string</code> | The Skaffold custom action responsible for render operations. |

---

##### `DeployAction`<sup>Required</sup> <a name="DeployAction" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.deployAction"></a>

```go
DeployAction *string
```

- *Type:* *string

The Skaffold custom action responsible for deploy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#deploy_action GoogleClouddeployCustomTargetType#deploy_action}

---

##### `IncludeSkaffoldModules`<sup>Optional</sup> <a name="IncludeSkaffoldModules" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.includeSkaffoldModules"></a>

```go
IncludeSkaffoldModules interface{}
```

- *Type:* interface{}

include_skaffold_modules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#include_skaffold_modules GoogleClouddeployCustomTargetType#include_skaffold_modules}

---

##### `RenderAction`<sup>Optional</sup> <a name="RenderAction" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.renderAction"></a>

```go
RenderAction *string
```

- *Type:* *string

The Skaffold custom action responsible for render operations.

If not provided then Cloud Deploy will perform the render operations via 'skaffold render'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#render_action GoogleClouddeployCustomTargetType#render_action}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules {
	Configs: *[]*string,
	Git: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit,
	GoogleCloudBuildRepo: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo,
	GoogleCloudStorage: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.configs">Configs</a></code> | <code>*[]*string</code> | The Skaffold Config modules to use from the specified source. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.git">Git</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | git block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudBuildRepo">GoogleCloudBuildRepo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | google_cloud_build_repo block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudStorage">GoogleCloudStorage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | google_cloud_storage block. |

---

##### `Configs`<sup>Optional</sup> <a name="Configs" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.configs"></a>

```go
Configs *[]*string
```

- *Type:* *[]*string

The Skaffold Config modules to use from the specified source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#configs GoogleClouddeployCustomTargetType#configs}

---

##### `Git`<sup>Optional</sup> <a name="Git" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.git"></a>

```go
Git GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#git GoogleClouddeployCustomTargetType#git}

---

##### `GoogleCloudBuildRepo`<sup>Optional</sup> <a name="GoogleCloudBuildRepo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudBuildRepo"></a>

```go
GoogleCloudBuildRepo GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

google_cloud_build_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#google_cloud_build_repo GoogleClouddeployCustomTargetType#google_cloud_build_repo}

---

##### `GoogleCloudStorage`<sup>Optional</sup> <a name="GoogleCloudStorage" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudStorage"></a>

```go
GoogleCloudStorage GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

google_cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#google_cloud_storage GoogleClouddeployCustomTargetType#google_cloud_storage}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit {
	Repo: *string,
	Path: *string,
	Ref: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.repo">Repo</a></code> | <code>*string</code> | Git repository the package should be cloned from. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.path">Path</a></code> | <code>*string</code> | Relative path from the repository root to the Skaffold file. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.ref">Ref</a></code> | <code>*string</code> | Git ref the package should be cloned from. |

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Git repository the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#repo GoogleClouddeployCustomTargetType#repo}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.path"></a>

```go
Path *string
```

- *Type:* *string

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

Git ref the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#ref GoogleClouddeployCustomTargetType#ref}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo {
	Repository: *string,
	Path: *string,
	Ref: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.repository">Repository</a></code> | <code>*string</code> | Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.path">Path</a></code> | <code>*string</code> | Relative path from the repository root to the Skaffold file. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.ref">Ref</a></code> | <code>*string</code> | Branch or tag to use when cloning the repository. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#repository GoogleClouddeployCustomTargetType#repository}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.path"></a>

```go
Path *string
```

- *Type:* *string

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

Branch or tag to use when cloning the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#ref GoogleClouddeployCustomTargetType#ref}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage {
	Source: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.source">Source</a></code> | <code>*string</code> | Cloud Storage source paths to copy recursively. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.path">Path</a></code> | <code>*string</code> | Relative path from the source to the Skaffold file. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.source"></a>

```go
Source *string
```

- *Type:* *string

Cloud Storage source paths to copy recursively.

For example, providing 'gs://my-bucket/dir/configs/*' will result in Skaffold copying all files within the 'dir/configs' directory in the bucket 'my-bucket'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#source GoogleClouddeployCustomTargetType#source}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.path"></a>

```go
Path *string
```

- *Type:* *string

Relative path from the source to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

### GoogleClouddeployCustomTargetTypeTasks <a name="GoogleClouddeployCustomTargetTypeTasks" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeTasks {
	Deploy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy,
	Render: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks.property.deploy">Deploy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a></code> | deploy block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks.property.render">Render</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a></code> | render block. |

---

##### `Deploy`<sup>Required</sup> <a name="Deploy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks.property.deploy"></a>

```go
Deploy GoogleClouddeployCustomTargetTypeTasksDeploy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a>

deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#deploy GoogleClouddeployCustomTargetType#deploy}

---

##### `Render`<sup>Optional</sup> <a name="Render" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks.property.render"></a>

```go
Render GoogleClouddeployCustomTargetTypeTasksRender
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a>

render block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#render GoogleClouddeployCustomTargetType#render}

---

### GoogleClouddeployCustomTargetTypeTasksDeploy <a name="GoogleClouddeployCustomTargetTypeTasksDeploy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeTasksDeploy {
	Container: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a></code> | container block. |

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy.property.container"></a>

```go
Container GoogleClouddeployCustomTargetTypeTasksDeployContainer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#container GoogleClouddeployCustomTargetType#container}

---

### GoogleClouddeployCustomTargetTypeTasksDeployContainer <a name="GoogleClouddeployCustomTargetTypeTasksDeployContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeTasksDeployContainer {
	Image: *string,
	Args: *[]*string,
	Command: *[]*string,
	Env: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.image">Image</a></code> | <code>*string</code> | Image is the container image to use. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.args">Args</a></code> | <code>*[]*string</code> | Args is the container arguments to use. This overrides the default arguments defined in the container image. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.command">Command</a></code> | <code>*[]*string</code> | Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.env">Env</a></code> | <code>*map[string]*string</code> | Environment variables that are set in the container. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

Image is the container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#image GoogleClouddeployCustomTargetType#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Args is the container arguments to use. This overrides the default arguments defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#args GoogleClouddeployCustomTargetType#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#command GoogleClouddeployCustomTargetType#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.env"></a>

```go
Env *map[string]*string
```

- *Type:* *map[string]*string

Environment variables that are set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#env GoogleClouddeployCustomTargetType#env}

---

### GoogleClouddeployCustomTargetTypeTasksRender <a name="GoogleClouddeployCustomTargetTypeTasksRender" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeTasksRender {
	Container: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a></code> | container block. |

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender.property.container"></a>

```go
Container GoogleClouddeployCustomTargetTypeTasksRenderContainer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#container GoogleClouddeployCustomTargetType#container}

---

### GoogleClouddeployCustomTargetTypeTasksRenderContainer <a name="GoogleClouddeployCustomTargetTypeTasksRenderContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeTasksRenderContainer {
	Image: *string,
	Args: *[]*string,
	Command: *[]*string,
	Env: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.image">Image</a></code> | <code>*string</code> | Image is the container image to use. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.args">Args</a></code> | <code>*[]*string</code> | Args is the container arguments to use. This overrides the default arguments defined in the container image. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.command">Command</a></code> | <code>*[]*string</code> | Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.env">Env</a></code> | <code>*map[string]*string</code> | Environment variables that are set in the container. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

Image is the container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#image GoogleClouddeployCustomTargetType#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Args is the container arguments to use. This overrides the default arguments defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#args GoogleClouddeployCustomTargetType#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#command GoogleClouddeployCustomTargetType#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.env"></a>

```go
Env *map[string]*string
```

- *Type:* *map[string]*string

Environment variables that are set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#env GoogleClouddeployCustomTargetType#env}

---

### GoogleClouddeployCustomTargetTypeTimeouts <a name="GoogleClouddeployCustomTargetTypeTimeouts" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

&googleclouddeploycustomtargettype.GoogleClouddeployCustomTargetTypeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#create GoogleClouddeployCustomTargetType#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#delete GoogleClouddeployCustomTargetType#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#update GoogleClouddeployCustomTargetType#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#create GoogleClouddeployCustomTargetType#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#delete GoogleClouddeployCustomTargetType#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_clouddeploy_custom_target_type#update GoogleClouddeployCustomTargetType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetRef">ResetRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetRef"></a>

```go
func ResetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetRef">ResetRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetRef"></a>

```go
func ResetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get"></a>

```go
func Get(index *f64) GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit">PutGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo">PutGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage">PutGoogleCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetConfigs">ResetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGit">ResetGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudBuildRepo">ResetGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudStorage">ResetGoogleCloudStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGit` <a name="PutGit" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit"></a>

```go
func PutGit(value GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---

##### `PutGoogleCloudBuildRepo` <a name="PutGoogleCloudBuildRepo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo"></a>

```go
func PutGoogleCloudBuildRepo(value GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---

##### `PutGoogleCloudStorage` <a name="PutGoogleCloudStorage" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage"></a>

```go
func PutGoogleCloudStorage(value GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---

##### `ResetConfigs` <a name="ResetConfigs" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetConfigs"></a>

```go
func ResetConfigs()
```

##### `ResetGit` <a name="ResetGit" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGit"></a>

```go
func ResetGit()
```

##### `ResetGoogleCloudBuildRepo` <a name="ResetGoogleCloudBuildRepo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudBuildRepo"></a>

```go
func ResetGoogleCloudBuildRepo()
```

##### `ResetGoogleCloudStorage` <a name="ResetGoogleCloudStorage" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudStorage"></a>

```go
func ResetGoogleCloudStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.git">Git</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepo">GoogleCloudBuildRepo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorage">GoogleCloudStorage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configsInput">ConfigsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.gitInput">GitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepoInput">GoogleCloudBuildRepoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorageInput">GoogleCloudStorageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configs">Configs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Git`<sup>Required</sup> <a name="Git" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.git"></a>

```go
func Git() GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference</a>

---

##### `GoogleCloudBuildRepo`<sup>Required</sup> <a name="GoogleCloudBuildRepo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepo"></a>

```go
func GoogleCloudBuildRepo() GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference</a>

---

##### `GoogleCloudStorage`<sup>Required</sup> <a name="GoogleCloudStorage" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorage"></a>

```go
func GoogleCloudStorage() GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference</a>

---

##### `ConfigsInput`<sup>Optional</sup> <a name="ConfigsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configsInput"></a>

```go
func ConfigsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GitInput`<sup>Optional</sup> <a name="GitInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.gitInput"></a>

```go
func GitInput() GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---

##### `GoogleCloudBuildRepoInput`<sup>Optional</sup> <a name="GoogleCloudBuildRepoInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepoInput"></a>

```go
func GoogleCloudBuildRepoInput() GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---

##### `GoogleCloudStorageInput`<sup>Optional</sup> <a name="GoogleCloudStorageInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorageInput"></a>

```go
func GoogleCloudStorageInput() GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configs"></a>

```go
func Configs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleClouddeployCustomTargetTypeCustomActionsOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeCustomActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployCustomTargetTypeCustomActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules">PutIncludeSkaffoldModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetIncludeSkaffoldModules">ResetIncludeSkaffoldModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetRenderAction">ResetRenderAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludeSkaffoldModules` <a name="PutIncludeSkaffoldModules" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules"></a>

```go
func PutIncludeSkaffoldModules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIncludeSkaffoldModules` <a name="ResetIncludeSkaffoldModules" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetIncludeSkaffoldModules"></a>

```go
func ResetIncludeSkaffoldModules()
```

##### `ResetRenderAction` <a name="ResetRenderAction" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetRenderAction"></a>

```go
func ResetRenderAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModules">IncludeSkaffoldModules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployActionInput">DeployActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModulesInput">IncludeSkaffoldModulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderActionInput">RenderActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployAction">DeployAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderAction">RenderAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeSkaffoldModules`<sup>Required</sup> <a name="IncludeSkaffoldModules" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModules"></a>

```go
func IncludeSkaffoldModules() GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList</a>

---

##### `DeployActionInput`<sup>Optional</sup> <a name="DeployActionInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployActionInput"></a>

```go
func DeployActionInput() *string
```

- *Type:* *string

---

##### `IncludeSkaffoldModulesInput`<sup>Optional</sup> <a name="IncludeSkaffoldModulesInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModulesInput"></a>

```go
func IncludeSkaffoldModulesInput() interface{}
```

- *Type:* interface{}

---

##### `RenderActionInput`<sup>Optional</sup> <a name="RenderActionInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderActionInput"></a>

```go
func RenderActionInput() *string
```

- *Type:* *string

---

##### `DeployAction`<sup>Required</sup> <a name="DeployAction" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployAction"></a>

```go
func DeployAction() *string
```

- *Type:* *string

---

##### `RenderAction`<sup>Required</sup> <a name="RenderAction" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderAction"></a>

```go
func RenderAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployCustomTargetTypeCustomActions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

---


### GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference <a name="GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetEnv"></a>

```go
func ResetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.envInput">EnvInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.env">Env</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.envInput"></a>

```go
func EnvInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.env"></a>

```go
func Env() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployCustomTargetTypeTasksDeployContainer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a>

---


### GoogleClouddeployCustomTargetTypeTasksDeployOutputReference <a name="GoogleClouddeployCustomTargetTypeTasksDeployOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeTasksDeployOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployCustomTargetTypeTasksDeployOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer"></a>

```go
func PutContainer(value GoogleClouddeployCustomTargetTypeTasksDeployContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.resetContainer"></a>

```go
func ResetContainer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference">GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.container"></a>

```go
func Container() GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference">GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.containerInput"></a>

```go
func ContainerInput() GoogleClouddeployCustomTargetTypeTasksDeployContainer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployCustomTargetTypeTasksDeploy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a>

---


### GoogleClouddeployCustomTargetTypeTasksOutputReference <a name="GoogleClouddeployCustomTargetTypeTasksOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeTasksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployCustomTargetTypeTasksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putDeploy">PutDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putRender">PutRender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.resetRender">ResetRender</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeploy` <a name="PutDeploy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putDeploy"></a>

```go
func PutDeploy(value GoogleClouddeployCustomTargetTypeTasksDeploy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putDeploy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a>

---

##### `PutRender` <a name="PutRender" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putRender"></a>

```go
func PutRender(value GoogleClouddeployCustomTargetTypeTasksRender)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putRender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a>

---

##### `ResetRender` <a name="ResetRender" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.resetRender"></a>

```go
func ResetRender()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.deploy">Deploy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference">GoogleClouddeployCustomTargetTypeTasksDeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.render">Render</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference">GoogleClouddeployCustomTargetTypeTasksRenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.deployInput">DeployInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.renderInput">RenderInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Deploy`<sup>Required</sup> <a name="Deploy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.deploy"></a>

```go
func Deploy() GoogleClouddeployCustomTargetTypeTasksDeployOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference">GoogleClouddeployCustomTargetTypeTasksDeployOutputReference</a>

---

##### `Render`<sup>Required</sup> <a name="Render" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.render"></a>

```go
func Render() GoogleClouddeployCustomTargetTypeTasksRenderOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference">GoogleClouddeployCustomTargetTypeTasksRenderOutputReference</a>

---

##### `DeployInput`<sup>Optional</sup> <a name="DeployInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.deployInput"></a>

```go
func DeployInput() GoogleClouddeployCustomTargetTypeTasksDeploy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a>

---

##### `RenderInput`<sup>Optional</sup> <a name="RenderInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.renderInput"></a>

```go
func RenderInput() GoogleClouddeployCustomTargetTypeTasksRender
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployCustomTargetTypeTasks
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a>

---


### GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference <a name="GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetEnv"></a>

```go
func ResetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.envInput">EnvInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.env">Env</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.envInput"></a>

```go
func EnvInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.env"></a>

```go
func Env() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployCustomTargetTypeTasksRenderContainer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a>

---


### GoogleClouddeployCustomTargetTypeTasksRenderOutputReference <a name="GoogleClouddeployCustomTargetTypeTasksRenderOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeTasksRenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployCustomTargetTypeTasksRenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer"></a>

```go
func PutContainer(value GoogleClouddeployCustomTargetTypeTasksRenderContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.resetContainer"></a>

```go
func ResetContainer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference">GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.container"></a>

```go
func Container() GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference">GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.containerInput"></a>

```go
func ContainerInput() GoogleClouddeployCustomTargetTypeTasksRenderContainer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployCustomTargetTypeTasksRender
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a>

---


### GoogleClouddeployCustomTargetTypeTimeoutsOutputReference <a name="GoogleClouddeployCustomTargetTypeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleclouddeploycustomtargettype"

googleclouddeploycustomtargettype.NewGoogleClouddeployCustomTargetTypeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployCustomTargetTypeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



