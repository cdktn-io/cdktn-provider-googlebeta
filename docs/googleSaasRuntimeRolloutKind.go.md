# `googleSaasRuntimeRolloutKind` Submodule <a name="`googleSaasRuntimeRolloutKind` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeRolloutKind <a name="GoogleSaasRuntimeRolloutKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind google_saas_runtime_rollout_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimerolloutkind"

googlesaasruntimerolloutkind.NewGoogleSaasRuntimeRolloutKind(scope Construct, id *string, config GoogleSaasRuntimeRolloutKindConfig) GoogleSaasRuntimeRolloutKind
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig">GoogleSaasRuntimeRolloutKindConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig">GoogleSaasRuntimeRolloutKindConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget">PutErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetErrorBudget">ResetErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy">ResetRolloutOrchestrationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUnitFilter">ResetUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUpdateUnitKindStrategy">ResetUpdateUnitKindStrategy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutErrorBudget` <a name="PutErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget"></a>

```go
func PutErrorBudget(value GoogleSaasRuntimeRolloutKindErrorBudget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSaasRuntimeRolloutKindTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetErrorBudget` <a name="ResetErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetErrorBudget"></a>

```go
func ResetErrorBudget()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRolloutOrchestrationStrategy` <a name="ResetRolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy"></a>

```go
func ResetRolloutOrchestrationStrategy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUnitFilter` <a name="ResetUnitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUnitFilter"></a>

```go
func ResetUnitFilter()
```

##### `ResetUpdateUnitKindStrategy` <a name="ResetUpdateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUpdateUnitKindStrategy"></a>

```go
func ResetUpdateUnitKindStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimerolloutkind"

googlesaasruntimerolloutkind.GoogleSaasRuntimeRolloutKind_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimerolloutkind"

googlesaasruntimerolloutkind.GoogleSaasRuntimeRolloutKind_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimerolloutkind"

googlesaasruntimerolloutkind.GoogleSaasRuntimeRolloutKind_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimerolloutkind"

googlesaasruntimerolloutkind.GoogleSaasRuntimeRolloutKind_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleSaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSaasRuntimeRolloutKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSaasRuntimeRolloutKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeRolloutKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudget">ErrorBudget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference">GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference">GoogleSaasRuntimeRolloutKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudgetInput">ErrorBudgetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindIdInput">RolloutKindIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput">RolloutOrchestrationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilterInput">UnitFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKindInput">UnitKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategyInput">UpdateUnitKindStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindId">RolloutKindId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy">RolloutOrchestrationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilter">UnitFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKind">UnitKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategy">UpdateUnitKindStrategy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ErrorBudget`<sup>Required</sup> <a name="ErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudget"></a>

```go
func ErrorBudget() GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference">GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeouts"></a>

```go
func Timeouts() GoogleSaasRuntimeRolloutKindTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference">GoogleSaasRuntimeRolloutKindTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ErrorBudgetInput`<sup>Optional</sup> <a name="ErrorBudgetInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudgetInput"></a>

```go
func ErrorBudgetInput() GoogleSaasRuntimeRolloutKindErrorBudget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RolloutKindIdInput`<sup>Optional</sup> <a name="RolloutKindIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindIdInput"></a>

```go
func RolloutKindIdInput() *string
```

- *Type:* *string

---

##### `RolloutOrchestrationStrategyInput`<sup>Optional</sup> <a name="RolloutOrchestrationStrategyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput"></a>

```go
func RolloutOrchestrationStrategyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnitFilterInput`<sup>Optional</sup> <a name="UnitFilterInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilterInput"></a>

```go
func UnitFilterInput() *string
```

- *Type:* *string

---

##### `UnitKindInput`<sup>Optional</sup> <a name="UnitKindInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKindInput"></a>

```go
func UnitKindInput() *string
```

- *Type:* *string

---

##### `UpdateUnitKindStrategyInput`<sup>Optional</sup> <a name="UpdateUnitKindStrategyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategyInput"></a>

```go
func UpdateUnitKindStrategyInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RolloutKindId`<sup>Required</sup> <a name="RolloutKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindId"></a>

```go
func RolloutKindId() *string
```

- *Type:* *string

---

##### `RolloutOrchestrationStrategy`<sup>Required</sup> <a name="RolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy"></a>

```go
func RolloutOrchestrationStrategy() *string
```

- *Type:* *string

---

##### `UnitFilter`<sup>Required</sup> <a name="UnitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilter"></a>

```go
func UnitFilter() *string
```

- *Type:* *string

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKind"></a>

```go
func UnitKind() *string
```

- *Type:* *string

---

##### `UpdateUnitKindStrategy`<sup>Required</sup> <a name="UpdateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategy"></a>

```go
func UpdateUnitKindStrategy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeRolloutKindConfig <a name="GoogleSaasRuntimeRolloutKindConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimerolloutkind"

&googlesaasruntimerolloutkind.GoogleSaasRuntimeRolloutKindConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	RolloutKindId: *string,
	UnitKind: *string,
	Annotations: *map[string]*string,
	ErrorBudget: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	RolloutOrchestrationStrategy: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts,
	UnitFilter: *string,
	UpdateUnitKindStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutKindId">RolloutKindId</a></code> | <code>*string</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitKind">UnitKind</a></code> | <code>*string</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.errorBudget">ErrorBudget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#id GoogleSaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#project GoogleSaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy">RolloutOrchestrationStrategy</a></code> | <code>*string</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitFilter">UnitFilter</a></code> | <code>*string</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy">UpdateUnitKindStrategy</a></code> | <code>*string</code> | The config for updating the unit kind. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#location GoogleSaasRuntimeRolloutKind#location}

---

##### `RolloutKindId`<sup>Required</sup> <a name="RolloutKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutKindId"></a>

```go
RolloutKindId *string
```

- *Type:* *string

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#rollout_kind_id GoogleSaasRuntimeRolloutKind#rollout_kind_id}

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitKind"></a>

```go
UnitKind *string
```

- *Type:* *string

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#unit_kind GoogleSaasRuntimeRolloutKind#unit_kind}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#annotations GoogleSaasRuntimeRolloutKind#annotations}

---

##### `ErrorBudget`<sup>Optional</sup> <a name="ErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.errorBudget"></a>

```go
ErrorBudget GoogleSaasRuntimeRolloutKindErrorBudget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#error_budget GoogleSaasRuntimeRolloutKind#error_budget}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#id GoogleSaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#labels GoogleSaasRuntimeRolloutKind#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#project GoogleSaasRuntimeRolloutKind#project}.

---

##### `RolloutOrchestrationStrategy`<sup>Optional</sup> <a name="RolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy"></a>

```go
RolloutOrchestrationStrategy *string
```

- *Type:* *string

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.

* "Google.Cloud.Simple.AllAtOnce"
* "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#rollout_orchestration_strategy GoogleSaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.timeouts"></a>

```go
Timeouts GoogleSaasRuntimeRolloutKindTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#timeouts GoogleSaasRuntimeRolloutKind#timeouts}

---

##### `UnitFilter`<sup>Optional</sup> <a name="UnitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitFilter"></a>

```go
UnitFilter *string
```

- *Type:* *string

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#unit_filter GoogleSaasRuntimeRolloutKind#unit_filter}

---

##### `UpdateUnitKindStrategy`<sup>Optional</sup> <a name="UpdateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy"></a>

```go
UpdateUnitKindStrategy *string
```

- *Type:* *string

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#update_unit_kind_strategy GoogleSaasRuntimeRolloutKind#update_unit_kind_strategy}

---

### GoogleSaasRuntimeRolloutKindErrorBudget <a name="GoogleSaasRuntimeRolloutKindErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimerolloutkind"

&googlesaasruntimerolloutkind.GoogleSaasRuntimeRolloutKindErrorBudget {
	AllowedCount: *f64,
	AllowedPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedCount">AllowedCount</a></code> | <code>*f64</code> | The maximum number of failed units allowed in a location without pausing the rollout. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedPercentage">AllowedPercentage</a></code> | <code>*f64</code> | The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout. |

---

##### `AllowedCount`<sup>Optional</sup> <a name="AllowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedCount"></a>

```go
AllowedCount *f64
```

- *Type:* *f64

The maximum number of failed units allowed in a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#allowed_count GoogleSaasRuntimeRolloutKind#allowed_count}

---

##### `AllowedPercentage`<sup>Optional</sup> <a name="AllowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedPercentage"></a>

```go
AllowedPercentage *f64
```

- *Type:* *f64

The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#allowed_percentage GoogleSaasRuntimeRolloutKind#allowed_percentage}

---

### GoogleSaasRuntimeRolloutKindTimeouts <a name="GoogleSaasRuntimeRolloutKindTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimerolloutkind"

&googlesaasruntimerolloutkind.GoogleSaasRuntimeRolloutKindTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#create GoogleSaasRuntimeRolloutKind#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#delete GoogleSaasRuntimeRolloutKind#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#update GoogleSaasRuntimeRolloutKind#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#create GoogleSaasRuntimeRolloutKind#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#delete GoogleSaasRuntimeRolloutKind#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#update GoogleSaasRuntimeRolloutKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference <a name="GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimerolloutkind"

googlesaasruntimerolloutkind.NewGoogleSaasRuntimeRolloutKindErrorBudgetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount">ResetAllowedCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage">ResetAllowedPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedCount` <a name="ResetAllowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount"></a>

```go
func ResetAllowedCount()
```

##### `ResetAllowedPercentage` <a name="ResetAllowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage"></a>

```go
func ResetAllowedPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput">AllowedCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput">AllowedPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount">AllowedCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage">AllowedPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedCountInput`<sup>Optional</sup> <a name="AllowedCountInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput"></a>

```go
func AllowedCountInput() *f64
```

- *Type:* *f64

---

##### `AllowedPercentageInput`<sup>Optional</sup> <a name="AllowedPercentageInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput"></a>

```go
func AllowedPercentageInput() *f64
```

- *Type:* *f64

---

##### `AllowedCount`<sup>Required</sup> <a name="AllowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount"></a>

```go
func AllowedCount() *f64
```

- *Type:* *f64

---

##### `AllowedPercentage`<sup>Required</sup> <a name="AllowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage"></a>

```go
func AllowedPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSaasRuntimeRolloutKindErrorBudget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---


### GoogleSaasRuntimeRolloutKindTimeoutsOutputReference <a name="GoogleSaasRuntimeRolloutKindTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimerolloutkind"

googlesaasruntimerolloutkind.NewGoogleSaasRuntimeRolloutKindTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeRolloutKindTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



