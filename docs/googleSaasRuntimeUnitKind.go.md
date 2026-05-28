# `googleSaasRuntimeUnitKind` Submodule <a name="`googleSaasRuntimeUnitKind` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeUnitKind <a name="GoogleSaasRuntimeUnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind google_saas_runtime_unit_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKind(scope Construct, id *string, config GoogleSaasRuntimeUnitKindConfig) GoogleSaasRuntimeUnitKind
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig">GoogleSaasRuntimeUnitKindConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig">GoogleSaasRuntimeUnitKindConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies">PutDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings">PutInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings">PutOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDefaultRelease">ResetDefaultRelease</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetInputVariableMappings">ResetInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOutputVariableMappings">ResetOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDependencies` <a name="PutDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies"></a>

```go
func PutDependencies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInputVariableMappings` <a name="PutInputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings"></a>

```go
func PutInputVariableMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutputVariableMappings` <a name="PutOutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings"></a>

```go
func PutOutputVariableMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSaasRuntimeUnitKindTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDefaultRelease` <a name="ResetDefaultRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDefaultRelease"></a>

```go
func ResetDefaultRelease()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDependencies"></a>

```go
func ResetDependencies()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetId"></a>

```go
func ResetId()
```

##### `ResetInputVariableMappings` <a name="ResetInputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetInputVariableMappings"></a>

```go
func ResetInputVariableMappings()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetOutputVariableMappings` <a name="ResetOutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOutputVariableMappings"></a>

```go
func ResetOutputVariableMappings()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKind_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKind_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKind_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKind_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleSaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSaasRuntimeUnitKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSaasRuntimeUnitKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeUnitKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList">GoogleSaasRuntimeUnitKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappings">InputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList">GoogleSaasRuntimeUnitKindInputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappings">OutputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList">GoogleSaasRuntimeUnitKindOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference">GoogleSaasRuntimeUnitKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultReleaseInput">DefaultReleaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependenciesInput">DependenciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappingsInput">InputVariableMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappingsInput">OutputVariableMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saasInput">SaasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindIdInput">UnitKindIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultRelease">DefaultRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saas">Saas</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindId">UnitKindId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependencies"></a>

```go
func Dependencies() GoogleSaasRuntimeUnitKindDependenciesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList">GoogleSaasRuntimeUnitKindDependenciesList</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `InputVariableMappings`<sup>Required</sup> <a name="InputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappings"></a>

```go
func InputVariableMappings() GoogleSaasRuntimeUnitKindInputVariableMappingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList">GoogleSaasRuntimeUnitKindInputVariableMappingsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputVariableMappings`<sup>Required</sup> <a name="OutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappings"></a>

```go
func OutputVariableMappings() GoogleSaasRuntimeUnitKindOutputVariableMappingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList">GoogleSaasRuntimeUnitKindOutputVariableMappingsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeouts"></a>

```go
func Timeouts() GoogleSaasRuntimeUnitKindTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference">GoogleSaasRuntimeUnitKindTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultReleaseInput`<sup>Optional</sup> <a name="DefaultReleaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultReleaseInput"></a>

```go
func DefaultReleaseInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependenciesInput"></a>

```go
func DependenciesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputVariableMappingsInput`<sup>Optional</sup> <a name="InputVariableMappingsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappingsInput"></a>

```go
func InputVariableMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OutputVariableMappingsInput`<sup>Optional</sup> <a name="OutputVariableMappingsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappingsInput"></a>

```go
func OutputVariableMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SaasInput`<sup>Optional</sup> <a name="SaasInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saasInput"></a>

```go
func SaasInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnitKindIdInput`<sup>Optional</sup> <a name="UnitKindIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindIdInput"></a>

```go
func UnitKindIdInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultRelease`<sup>Required</sup> <a name="DefaultRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultRelease"></a>

```go
func DefaultRelease() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Saas`<sup>Required</sup> <a name="Saas" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saas"></a>

```go
func Saas() *string
```

- *Type:* *string

---

##### `UnitKindId`<sup>Required</sup> <a name="UnitKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindId"></a>

```go
func UnitKindId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeUnitKindConfig <a name="GoogleSaasRuntimeUnitKindConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

&googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKindConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Saas: *string,
	UnitKindId: *string,
	Annotations: *map[string]*string,
	DefaultRelease: *string,
	DeletionPolicy: *string,
	Dependencies: interface{},
	Id: *string,
	InputVariableMappings: interface{},
	Labels: *map[string]*string,
	OutputVariableMappings: interface{},
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.saas">Saas</a></code> | <code>*string</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.unitKindId">UnitKindId</a></code> | <code>*string</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.defaultRelease">DefaultRelease</a></code> | <code>*string</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependencies">Dependencies</a></code> | <code>interface{}</code> | dependencies block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.inputVariableMappings">InputVariableMappings</a></code> | <code>interface{}</code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.outputVariableMappings">OutputVariableMappings</a></code> | <code>interface{}</code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#location GoogleSaasRuntimeUnitKind#location}

---

##### `Saas`<sup>Required</sup> <a name="Saas" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.saas"></a>

```go
Saas *string
```

- *Type:* *string

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#saas GoogleSaasRuntimeUnitKind#saas}

---

##### `UnitKindId`<sup>Required</sup> <a name="UnitKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.unitKindId"></a>

```go
UnitKindId *string
```

- *Type:* *string

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#unit_kind_id GoogleSaasRuntimeUnitKind#unit_kind_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#annotations GoogleSaasRuntimeUnitKind#annotations}

---

##### `DefaultRelease`<sup>Optional</sup> <a name="DefaultRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.defaultRelease"></a>

```go
DefaultRelease *string
```

- *Type:* *string

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#default_release GoogleSaasRuntimeUnitKind#default_release}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#deletion_policy GoogleSaasRuntimeUnitKind#deletion_policy}

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependencies"></a>

```go
Dependencies interface{}
```

- *Type:* interface{}

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependencies GoogleSaasRuntimeUnitKind#dependencies}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputVariableMappings`<sup>Optional</sup> <a name="InputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.inputVariableMappings"></a>

```go
InputVariableMappings interface{}
```

- *Type:* interface{}

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#input_variable_mappings GoogleSaasRuntimeUnitKind#input_variable_mappings}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#labels GoogleSaasRuntimeUnitKind#labels}

---

##### `OutputVariableMappings`<sup>Optional</sup> <a name="OutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.outputVariableMappings"></a>

```go
OutputVariableMappings interface{}
```

- *Type:* interface{}

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#output_variable_mappings GoogleSaasRuntimeUnitKind#output_variable_mappings}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.timeouts"></a>

```go
Timeouts GoogleSaasRuntimeUnitKindTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#timeouts GoogleSaasRuntimeUnitKind#timeouts}

---

### GoogleSaasRuntimeUnitKindDependencies <a name="GoogleSaasRuntimeUnitKindDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

&googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKindDependencies {
	Alias: *string,
	UnitKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.alias">Alias</a></code> | <code>*string</code> | An alias for the dependency. Used for input variable mapping. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.unitKind">UnitKind</a></code> | <code>*string</code> | The unit kind of the dependency. |

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

An alias for the dependency. Used for input variable mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#alias GoogleSaasRuntimeUnitKind#alias}

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.unitKind"></a>

```go
UnitKind *string
```

- *Type:* *string

The unit kind of the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#unit_kind GoogleSaasRuntimeUnitKind#unit_kind}

---

### GoogleSaasRuntimeUnitKindInputVariableMappings <a name="GoogleSaasRuntimeUnitKindInputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

&googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKindInputVariableMappings {
	Variable: *string,
	From: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom,
	To: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.variable">Variable</a></code> | <code>*string</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.from">From</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.to">To</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | to block. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#variable GoogleSaasRuntimeUnitKind#variable}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.from"></a>

```go
From GoogleSaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#from GoogleSaasRuntimeUnitKind#from}

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.to"></a>

```go
To GoogleSaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#to GoogleSaasRuntimeUnitKind#to}

---

### GoogleSaasRuntimeUnitKindInputVariableMappingsFrom <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

&googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom {
	Dependency: *string,
	OutputVariable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency">Dependency</a></code> | <code>*string</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable">OutputVariable</a></code> | <code>*string</code> | Name of the outputVariable on the dependency. |

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency"></a>

```go
Dependency *string
```

- *Type:* *string

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `OutputVariable`<sup>Required</sup> <a name="OutputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable"></a>

```go
OutputVariable *string
```

- *Type:* *string

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}

---

### GoogleSaasRuntimeUnitKindInputVariableMappingsTo <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

&googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo {
	Dependency: *string,
	InputVariable: *string,
	IgnoreForLookup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.dependency">Dependency</a></code> | <code>*string</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable">InputVariable</a></code> | <code>*string</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup">IgnoreForLookup</a></code> | <code>interface{}</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.dependency"></a>

```go
Dependency *string
```

- *Type:* *string

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `InputVariable`<sup>Required</sup> <a name="InputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable"></a>

```go
InputVariable *string
```

- *Type:* *string

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}

---

##### `IgnoreForLookup`<sup>Optional</sup> <a name="IgnoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup"></a>

```go
IgnoreForLookup interface{}
```

- *Type:* interface{}

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappings <a name="GoogleSaasRuntimeUnitKindOutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

&googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKindOutputVariableMappings {
	Variable: *string,
	From: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom,
	To: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.variable">Variable</a></code> | <code>*string</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.from">From</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.to">To</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | to block. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#variable GoogleSaasRuntimeUnitKind#variable}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.from"></a>

```go
From GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#from GoogleSaasRuntimeUnitKind#from}

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.to"></a>

```go
To GoogleSaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#to GoogleSaasRuntimeUnitKind#to}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

&googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom {
	Dependency: *string,
	OutputVariable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency">Dependency</a></code> | <code>*string</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable">OutputVariable</a></code> | <code>*string</code> | Name of the outputVariable on the dependency. |

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency"></a>

```go
Dependency *string
```

- *Type:* *string

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `OutputVariable`<sup>Required</sup> <a name="OutputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable"></a>

```go
OutputVariable *string
```

- *Type:* *string

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappingsTo <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

&googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo {
	Dependency: *string,
	InputVariable: *string,
	IgnoreForLookup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency">Dependency</a></code> | <code>*string</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable">InputVariable</a></code> | <code>*string</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup">IgnoreForLookup</a></code> | <code>interface{}</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency"></a>

```go
Dependency *string
```

- *Type:* *string

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `InputVariable`<sup>Required</sup> <a name="InputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable"></a>

```go
InputVariable *string
```

- *Type:* *string

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}

---

##### `IgnoreForLookup`<sup>Optional</sup> <a name="IgnoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup"></a>

```go
IgnoreForLookup interface{}
```

- *Type:* interface{}

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}

---

### GoogleSaasRuntimeUnitKindTimeouts <a name="GoogleSaasRuntimeUnitKindTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

&googlesaasruntimeunitkind.GoogleSaasRuntimeUnitKindTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#create GoogleSaasRuntimeUnitKind#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#delete GoogleSaasRuntimeUnitKind#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#update GoogleSaasRuntimeUnitKind#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#create GoogleSaasRuntimeUnitKind#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#delete GoogleSaasRuntimeUnitKind#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#update GoogleSaasRuntimeUnitKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeUnitKindDependenciesList <a name="GoogleSaasRuntimeUnitKindDependenciesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleSaasRuntimeUnitKindDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get"></a>

```go
func Get(index *f64) GoogleSaasRuntimeUnitKindDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitKindDependenciesOutputReference <a name="GoogleSaasRuntimeUnitKindDependenciesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleSaasRuntimeUnitKindDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput">UnitKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKind">UnitKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `UnitKindInput`<sup>Optional</sup> <a name="UnitKindInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput"></a>

```go
func UnitKindInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKind"></a>

```go
func UnitKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput">DependencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput">OutputVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency">Dependency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable">OutputVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependencyInput`<sup>Optional</sup> <a name="DependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```go
func DependencyInput() *string
```

- *Type:* *string

---

##### `OutputVariableInput`<sup>Optional</sup> <a name="OutputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```go
func OutputVariableInput() *string
```

- *Type:* *string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency"></a>

```go
func Dependency() *string
```

- *Type:* *string

---

##### `OutputVariable`<sup>Required</sup> <a name="OutputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable"></a>

```go
func OutputVariable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsList <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindInputVariableMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleSaasRuntimeUnitKindInputVariableMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get"></a>

```go
func Get(index *f64) GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom">PutFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo">PutTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFrom` <a name="PutFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom"></a>

```go
func PutFrom(value GoogleSaasRuntimeUnitKindInputVariableMappingsFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `PutTo` <a name="PutTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo"></a>

```go
func PutTo(value GoogleSaasRuntimeUnitKindInputVariableMappingsTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from">From</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to">To</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput">FromInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput">ToInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from"></a>

```go
func From() GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a>

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to"></a>

```go
func To() GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput"></a>

```go
func FromInput() GoogleSaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput"></a>

```go
func ToInput() GoogleSaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup">ResetIgnoreForLookup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreForLookup` <a name="ResetIgnoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```go
func ResetIgnoreForLookup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput">DependencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput">IgnoreForLookupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput">InputVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency">Dependency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup">IgnoreForLookup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable">InputVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependencyInput`<sup>Optional</sup> <a name="DependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput"></a>

```go
func DependencyInput() *string
```

- *Type:* *string

---

##### `IgnoreForLookupInput`<sup>Optional</sup> <a name="IgnoreForLookupInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```go
func IgnoreForLookupInput() interface{}
```

- *Type:* interface{}

---

##### `InputVariableInput`<sup>Optional</sup> <a name="InputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```go
func InputVariableInput() *string
```

- *Type:* *string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency"></a>

```go
func Dependency() *string
```

- *Type:* *string

---

##### `IgnoreForLookup`<sup>Required</sup> <a name="IgnoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```go
func IgnoreForLookup() interface{}
```

- *Type:* interface{}

---

##### `InputVariable`<sup>Required</sup> <a name="InputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable"></a>

```go
func InputVariable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput">DependencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput">OutputVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency">Dependency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable">OutputVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependencyInput`<sup>Optional</sup> <a name="DependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```go
func DependencyInput() *string
```

- *Type:* *string

---

##### `OutputVariableInput`<sup>Optional</sup> <a name="OutputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```go
func OutputVariableInput() *string
```

- *Type:* *string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency"></a>

```go
func Dependency() *string
```

- *Type:* *string

---

##### `OutputVariable`<sup>Required</sup> <a name="OutputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable"></a>

```go
func OutputVariable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsList <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindOutputVariableMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleSaasRuntimeUnitKindOutputVariableMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get"></a>

```go
func Get(index *f64) GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom">PutFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo">PutTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFrom` <a name="PutFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom"></a>

```go
func PutFrom(value GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `PutTo` <a name="PutTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo"></a>

```go
func PutTo(value GoogleSaasRuntimeUnitKindOutputVariableMappingsTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from">From</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to">To</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput">FromInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput">ToInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from"></a>

```go
func From() GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a>

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to"></a>

```go
func To() GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput"></a>

```go
func FromInput() GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput"></a>

```go
func ToInput() GoogleSaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup">ResetIgnoreForLookup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreForLookup` <a name="ResetIgnoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```go
func ResetIgnoreForLookup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput">DependencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput">IgnoreForLookupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput">InputVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency">Dependency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup">IgnoreForLookup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable">InputVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependencyInput`<sup>Optional</sup> <a name="DependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput"></a>

```go
func DependencyInput() *string
```

- *Type:* *string

---

##### `IgnoreForLookupInput`<sup>Optional</sup> <a name="IgnoreForLookupInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```go
func IgnoreForLookupInput() interface{}
```

- *Type:* interface{}

---

##### `InputVariableInput`<sup>Optional</sup> <a name="InputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```go
func InputVariableInput() *string
```

- *Type:* *string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency"></a>

```go
func Dependency() *string
```

- *Type:* *string

---

##### `IgnoreForLookup`<sup>Required</sup> <a name="IgnoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```go
func IgnoreForLookup() interface{}
```

- *Type:* interface{}

---

##### `InputVariable`<sup>Required</sup> <a name="InputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable"></a>

```go
func InputVariable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---


### GoogleSaasRuntimeUnitKindTimeoutsOutputReference <a name="GoogleSaasRuntimeUnitKindTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesaasruntimeunitkind"

googlesaasruntimeunitkind.NewGoogleSaasRuntimeUnitKindTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSaasRuntimeUnitKindTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



