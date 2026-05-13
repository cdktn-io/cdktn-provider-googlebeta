# `googleSaasRuntimeUnitOperation` Submodule <a name="`googleSaasRuntimeUnitOperation` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeUnitOperation <a name="GoogleSaasRuntimeUnitOperation" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation google_saas_runtime_unit_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperation(scope Construct, id *string, config GoogleSaasRuntimeUnitOperationConfig) GoogleSaasRuntimeUnitOperation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig">GoogleSaasRuntimeUnitOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig">GoogleSaasRuntimeUnitOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision">PutDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision">PutProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade">PutUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetDeprovision">ResetDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProvision">ResetProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetUpgrade">ResetUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetWaitForCompletion">ResetWaitForCompletion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeprovision` <a name="PutDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision"></a>

```go
func PutDeprovision(value GoogleSaasRuntimeUnitOperationDeprovision)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---

##### `PutProvision` <a name="PutProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision"></a>

```go
func PutProvision(value GoogleSaasRuntimeUnitOperationProvision)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSaasRuntimeUnitOperationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

---

##### `PutUpgrade` <a name="PutUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade"></a>

```go
func PutUpgrade(value GoogleSaasRuntimeUnitOperationUpgrade)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDeprovision` <a name="ResetDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetDeprovision"></a>

```go
func ResetDeprovision()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProvision` <a name="ResetProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProvision"></a>

```go
func ResetProvision()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpgrade` <a name="ResetUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetUpgrade"></a>

```go
func ResetUpgrade()
```

##### `ResetWaitForCompletion` <a name="ResetWaitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetWaitForCompletion"></a>

```go
func ResetWaitForCompletion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleSaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSaasRuntimeUnitOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSaasRuntimeUnitOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeUnitOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList">GoogleSaasRuntimeUnitOperationConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovision">Deprovision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference">GoogleSaasRuntimeUnitOperationDeprovisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.engineState">EngineState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.errorCategory">ErrorCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provision">Provision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference">GoogleSaasRuntimeUnitOperationProvisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference">GoogleSaasRuntimeUnitOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference">GoogleSaasRuntimeUnitOperationUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovisionInput">DeprovisionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisionInput">ProvisionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationIdInput">UnitOperationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgradeInput">UpgradeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletionInput">WaitForCompletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationId">UnitOperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletion">WaitForCompletion</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.conditions"></a>

```go
func Conditions() GoogleSaasRuntimeUnitOperationConditionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList">GoogleSaasRuntimeUnitOperationConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Deprovision`<sup>Required</sup> <a name="Deprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovision"></a>

```go
func Deprovision() GoogleSaasRuntimeUnitOperationDeprovisionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference">GoogleSaasRuntimeUnitOperationDeprovisionOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EngineState`<sup>Required</sup> <a name="EngineState" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.engineState"></a>

```go
func EngineState() *string
```

- *Type:* *string

---

##### `ErrorCategory`<sup>Required</sup> <a name="ErrorCategory" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.errorCategory"></a>

```go
func ErrorCategory() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Provision`<sup>Required</sup> <a name="Provision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provision"></a>

```go
func Provision() GoogleSaasRuntimeUnitOperationProvisionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference">GoogleSaasRuntimeUnitOperationProvisionOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeouts"></a>

```go
func Timeouts() GoogleSaasRuntimeUnitOperationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference">GoogleSaasRuntimeUnitOperationTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Upgrade`<sup>Required</sup> <a name="Upgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgrade"></a>

```go
func Upgrade() GoogleSaasRuntimeUnitOperationUpgradeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference">GoogleSaasRuntimeUnitOperationUpgradeOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeprovisionInput`<sup>Optional</sup> <a name="DeprovisionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovisionInput"></a>

```go
func DeprovisionInput() GoogleSaasRuntimeUnitOperationDeprovision
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProvisionInput`<sup>Optional</sup> <a name="ProvisionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisionInput"></a>

```go
func ProvisionInput() GoogleSaasRuntimeUnitOperationProvision
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `UnitOperationIdInput`<sup>Optional</sup> <a name="UnitOperationIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationIdInput"></a>

```go
func UnitOperationIdInput() *string
```

- *Type:* *string

---

##### `UpgradeInput`<sup>Optional</sup> <a name="UpgradeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgradeInput"></a>

```go
func UpgradeInput() GoogleSaasRuntimeUnitOperationUpgrade
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---

##### `WaitForCompletionInput`<sup>Optional</sup> <a name="WaitForCompletionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletionInput"></a>

```go
func WaitForCompletionInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `UnitOperationId`<sup>Required</sup> <a name="UnitOperationId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationId"></a>

```go
func UnitOperationId() *string
```

- *Type:* *string

---

##### `WaitForCompletion`<sup>Required</sup> <a name="WaitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletion"></a>

```go
func WaitForCompletion() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeUnitOperationConditions <a name="GoogleSaasRuntimeUnitOperationConditions" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

&googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperationConditions {

}
```


### GoogleSaasRuntimeUnitOperationConfig <a name="GoogleSaasRuntimeUnitOperationConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

&googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Unit: *string,
	UnitOperationId: *string,
	Annotations: *map[string]*string,
	Deprovision: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Provision: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts,
	Upgrade: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade,
	WaitForCompletion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unit">Unit</a></code> | <code>*string</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unitOperationId">UnitOperationId</a></code> | <code>*string</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.deprovision">Deprovision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provision">Provision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.waitForCompletion">WaitForCompletion</a></code> | <code>interface{}</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#location GoogleSaasRuntimeUnitOperation#location}

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#unit GoogleSaasRuntimeUnitOperation#unit}

---

##### `UnitOperationId`<sup>Required</sup> <a name="UnitOperationId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unitOperationId"></a>

```go
UnitOperationId *string
```

- *Type:* *string

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#unit_operation_id GoogleSaasRuntimeUnitOperation#unit_operation_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#annotations GoogleSaasRuntimeUnitOperation#annotations}

---

##### `Deprovision`<sup>Optional</sup> <a name="Deprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.deprovision"></a>

```go
Deprovision GoogleSaasRuntimeUnitOperationDeprovision
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#deprovision GoogleSaasRuntimeUnitOperation#deprovision}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#labels GoogleSaasRuntimeUnitOperation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}.

---

##### `Provision`<sup>Optional</sup> <a name="Provision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provision"></a>

```go
Provision GoogleSaasRuntimeUnitOperationProvision
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#provision GoogleSaasRuntimeUnitOperation#provision}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.timeouts"></a>

```go
Timeouts GoogleSaasRuntimeUnitOperationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#timeouts GoogleSaasRuntimeUnitOperation#timeouts}

---

##### `Upgrade`<sup>Optional</sup> <a name="Upgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.upgrade"></a>

```go
Upgrade GoogleSaasRuntimeUnitOperationUpgrade
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#upgrade GoogleSaasRuntimeUnitOperation#upgrade}

---

##### `WaitForCompletion`<sup>Optional</sup> <a name="WaitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.waitForCompletion"></a>

```go
WaitForCompletion interface{}
```

- *Type:* interface{}

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#wait_for_completion GoogleSaasRuntimeUnitOperation#wait_for_completion}

---

### GoogleSaasRuntimeUnitOperationDeprovision <a name="GoogleSaasRuntimeUnitOperationDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

&googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperationDeprovision {

}
```


### GoogleSaasRuntimeUnitOperationProvision <a name="GoogleSaasRuntimeUnitOperationProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

&googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperationProvision {
	InputVariables: interface{},
	Release: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.inputVariables">InputVariables</a></code> | <code>interface{}</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.release">Release</a></code> | <code>*string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `InputVariables`<sup>Optional</sup> <a name="InputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.inputVariables"></a>

```go
InputVariables interface{}
```

- *Type:* interface{}

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#input_variables GoogleSaasRuntimeUnitOperation#input_variables}

---

##### `Release`<sup>Optional</sup> <a name="Release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.release"></a>

```go
Release *string
```

- *Type:* *string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#release GoogleSaasRuntimeUnitOperation#release}

---

### GoogleSaasRuntimeUnitOperationProvisionInputVariables <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

&googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables {
	Variable: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.variable">Variable</a></code> | <code>*string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.type">Type</a></code> | <code>*string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.value">Value</a></code> | <code>*string</code> | String encoded value for the variable. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#variable GoogleSaasRuntimeUnitOperation#variable}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.type"></a>

```go
Type *string
```

- *Type:* *string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#type GoogleSaasRuntimeUnitOperation#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.value"></a>

```go
Value *string
```

- *Type:* *string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#value GoogleSaasRuntimeUnitOperation#value}

---

### GoogleSaasRuntimeUnitOperationTimeouts <a name="GoogleSaasRuntimeUnitOperationTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

&googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#create GoogleSaasRuntimeUnitOperation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#delete GoogleSaasRuntimeUnitOperation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#update GoogleSaasRuntimeUnitOperation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#create GoogleSaasRuntimeUnitOperation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#delete GoogleSaasRuntimeUnitOperation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#update GoogleSaasRuntimeUnitOperation#update}.

---

### GoogleSaasRuntimeUnitOperationUpgrade <a name="GoogleSaasRuntimeUnitOperationUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

&googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperationUpgrade {
	InputVariables: interface{},
	Release: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.inputVariables">InputVariables</a></code> | <code>interface{}</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.release">Release</a></code> | <code>*string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `InputVariables`<sup>Optional</sup> <a name="InputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.inputVariables"></a>

```go
InputVariables interface{}
```

- *Type:* interface{}

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#input_variables GoogleSaasRuntimeUnitOperation#input_variables}

---

##### `Release`<sup>Optional</sup> <a name="Release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.release"></a>

```go
Release *string
```

- *Type:* *string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#release GoogleSaasRuntimeUnitOperation#release}

---

### GoogleSaasRuntimeUnitOperationUpgradeInputVariables <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

&googlesaasruntimeunitoperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables {
	Variable: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.variable">Variable</a></code> | <code>*string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.type">Type</a></code> | <code>*string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.value">Value</a></code> | <code>*string</code> | String encoded value for the variable. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#variable GoogleSaasRuntimeUnitOperation#variable}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.type"></a>

```go
Type *string
```

- *Type:* *string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#type GoogleSaasRuntimeUnitOperation#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.value"></a>

```go
Value *string
```

- *Type:* *string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#value GoogleSaasRuntimeUnitOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeUnitOperationConditionsList <a name="GoogleSaasRuntimeUnitOperationConditionsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperationConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleSaasRuntimeUnitOperationConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get"></a>

```go
func Get(index *f64) GoogleSaasRuntimeUnitOperationConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleSaasRuntimeUnitOperationConditionsOutputReference <a name="GoogleSaasRuntimeUnitOperationConditionsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperationConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleSaasRuntimeUnitOperationConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions">GoogleSaasRuntimeUnitOperationConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSaasRuntimeUnitOperationConditions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions">GoogleSaasRuntimeUnitOperationConditions</a>

---


### GoogleSaasRuntimeUnitOperationDeprovisionOutputReference <a name="GoogleSaasRuntimeUnitOperationDeprovisionOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperationDeprovisionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeUnitOperationDeprovisionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSaasRuntimeUnitOperationDeprovision
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---


### GoogleSaasRuntimeUnitOperationProvisionInputVariablesList <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariablesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperationProvisionInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleSaasRuntimeUnitOperationProvisionInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get"></a>

```go
func Get(index *f64) GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitOperationProvisionOutputReference <a name="GoogleSaasRuntimeUnitOperationProvisionOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperationProvisionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeUnitOperationProvisionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables">PutInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables">ResetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetRelease">ResetRelease</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputVariables` <a name="PutInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables"></a>

```go
func PutInputVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInputVariables` <a name="ResetInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables"></a>

```go
func ResetInputVariables()
```

##### `ResetRelease` <a name="ResetRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetRelease"></a>

```go
func ResetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList">GoogleSaasRuntimeUnitOperationProvisionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput">InputVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput">ReleaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.release">Release</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables"></a>

```go
func InputVariables() GoogleSaasRuntimeUnitOperationProvisionInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList">GoogleSaasRuntimeUnitOperationProvisionInputVariablesList</a>

---

##### `InputVariablesInput`<sup>Optional</sup> <a name="InputVariablesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput"></a>

```go
func InputVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `ReleaseInput`<sup>Optional</sup> <a name="ReleaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput"></a>

```go
func ReleaseInput() *string
```

- *Type:* *string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.release"></a>

```go
func Release() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSaasRuntimeUnitOperationProvision
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---


### GoogleSaasRuntimeUnitOperationTimeoutsOutputReference <a name="GoogleSaasRuntimeUnitOperationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeUnitOperationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperationUpgradeInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get"></a>

```go
func Get(index *f64) GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitOperationUpgradeOutputReference <a name="GoogleSaasRuntimeUnitOperationUpgradeOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitoperation"

googlesaasruntimeunitoperation.NewGoogleSaasRuntimeUnitOperationUpgradeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeUnitOperationUpgradeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables">PutInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables">ResetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetRelease">ResetRelease</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputVariables` <a name="PutInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables"></a>

```go
func PutInputVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInputVariables` <a name="ResetInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables"></a>

```go
func ResetInputVariables()
```

##### `ResetRelease` <a name="ResetRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetRelease"></a>

```go
func ResetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList">GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput">InputVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput">ReleaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.release">Release</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables"></a>

```go
func InputVariables() GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList">GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList</a>

---

##### `InputVariablesInput`<sup>Optional</sup> <a name="InputVariablesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput"></a>

```go
func InputVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `ReleaseInput`<sup>Optional</sup> <a name="ReleaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput"></a>

```go
func ReleaseInput() *string
```

- *Type:* *string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.release"></a>

```go
func Release() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSaasRuntimeUnitOperationUpgrade
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---



