# `googleApigeeEnvironmentDebugmask` Submodule <a name="`googleApigeeEnvironmentDebugmask` Submodule" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentDebugmask <a name="GoogleApigeeEnvironmentDebugmask" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask google_apigee_environment_debugmask}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleapigeeenvironmentdebugmask"

googleapigeeenvironmentdebugmask.NewGoogleApigeeEnvironmentDebugmask(scope Construct, id *string, config GoogleApigeeEnvironmentDebugmaskConfig) GoogleApigeeEnvironmentDebugmask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig">GoogleApigeeEnvironmentDebugmaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig">GoogleApigeeEnvironmentDebugmaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetFaultXPaths">ResetFaultXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetNamespaces">ResetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestJsonPaths">ResetRequestJsonPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestXPaths">ResetRequestXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseJsonPaths">ResetResponseJsonPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseXPaths">ResetResponseXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApigeeEnvironmentDebugmaskTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

---

##### `ResetFaultXPaths` <a name="ResetFaultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetFaultXPaths"></a>

```go
func ResetFaultXPaths()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetNamespaces"></a>

```go
func ResetNamespaces()
```

##### `ResetRequestJsonPaths` <a name="ResetRequestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestJsonPaths"></a>

```go
func ResetRequestJsonPaths()
```

##### `ResetRequestXPaths` <a name="ResetRequestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestXPaths"></a>

```go
func ResetRequestXPaths()
```

##### `ResetResponseJsonPaths` <a name="ResetResponseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseJsonPaths"></a>

```go
func ResetResponseJsonPaths()
```

##### `ResetResponseXPaths` <a name="ResetResponseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseXPaths"></a>

```go
func ResetResponseXPaths()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetVariables"></a>

```go
func ResetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleapigeeenvironmentdebugmask"

googleapigeeenvironmentdebugmask.GoogleApigeeEnvironmentDebugmask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleapigeeenvironmentdebugmask"

googleapigeeenvironmentdebugmask.GoogleApigeeEnvironmentDebugmask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleapigeeenvironmentdebugmask"

googleapigeeenvironmentdebugmask.GoogleApigeeEnvironmentDebugmask_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleapigeeenvironmentdebugmask"

googleapigeeenvironmentdebugmask.GoogleApigeeEnvironmentDebugmask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApigeeEnvironmentDebugmask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApigeeEnvironmentDebugmask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentDebugmask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference">GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envIdInput">EnvIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPathsInput">FaultXPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespacesInput">NamespacesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPathsInput">RequestJsonPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPathsInput">RequestXPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPathsInput">ResponseJsonPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPathsInput">ResponseXPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variablesInput">VariablesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envId">EnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPaths">FaultXPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespaces">Namespaces</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPaths">RequestJsonPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPaths">RequestXPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPaths">ResponseJsonPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPaths">ResponseXPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variables">Variables</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeouts"></a>

```go
func Timeouts() GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference">GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference</a>

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envIdInput"></a>

```go
func EnvIdInput() *string
```

- *Type:* *string

---

##### `FaultXPathsInput`<sup>Optional</sup> <a name="FaultXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPathsInput"></a>

```go
func FaultXPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespacesInput"></a>

```go
func NamespacesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestJsonPathsInput`<sup>Optional</sup> <a name="RequestJsonPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPathsInput"></a>

```go
func RequestJsonPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestXPathsInput`<sup>Optional</sup> <a name="RequestXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPathsInput"></a>

```go
func RequestXPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseJsonPathsInput`<sup>Optional</sup> <a name="ResponseJsonPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPathsInput"></a>

```go
func ResponseJsonPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseXPathsInput`<sup>Optional</sup> <a name="ResponseXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPathsInput"></a>

```go
func ResponseXPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variablesInput"></a>

```go
func VariablesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envId"></a>

```go
func EnvId() *string
```

- *Type:* *string

---

##### `FaultXPaths`<sup>Required</sup> <a name="FaultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPaths"></a>

```go
func FaultXPaths() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespaces"></a>

```go
func Namespaces() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestJsonPaths`<sup>Required</sup> <a name="RequestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPaths"></a>

```go
func RequestJsonPaths() *[]*string
```

- *Type:* *[]*string

---

##### `RequestXPaths`<sup>Required</sup> <a name="RequestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPaths"></a>

```go
func RequestXPaths() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseJsonPaths`<sup>Required</sup> <a name="ResponseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPaths"></a>

```go
func ResponseJsonPaths() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseXPaths`<sup>Required</sup> <a name="ResponseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPaths"></a>

```go
func ResponseXPaths() *[]*string
```

- *Type:* *[]*string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variables"></a>

```go
func Variables() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentDebugmaskConfig <a name="GoogleApigeeEnvironmentDebugmaskConfig" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleapigeeenvironmentdebugmask"

&googleapigeeenvironmentdebugmask.GoogleApigeeEnvironmentDebugmaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EnvId: *string,
	FaultXPaths: *[]*string,
	Id: *string,
	Namespaces: *map[string]*string,
	RequestJsonPaths: *[]*string,
	RequestXPaths: *[]*string,
	ResponseJsonPaths: *[]*string,
	ResponseXPaths: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts,
	Variables: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.envId">EnvId</a></code> | <code>*string</code> | The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.faultXPaths">FaultXPaths</a></code> | <code>*[]*string</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#id GoogleApigeeEnvironmentDebugmask#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.namespaces">Namespaces</a></code> | <code>*map[string]*string</code> | Map of namespaces to URIs. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths">RequestJsonPaths</a></code> | <code>*[]*string</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestXPaths">RequestXPaths</a></code> | <code>*[]*string</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths">ResponseJsonPaths</a></code> | <code>*[]*string</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseXPaths">ResponseXPaths</a></code> | <code>*[]*string</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.variables">Variables</a></code> | <code>*[]*string</code> | List of variables that the debug mask applies to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.envId"></a>

```go
EnvId *string
```

- *Type:* *string

The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#env_id GoogleApigeeEnvironmentDebugmask#env_id}

---

##### `FaultXPaths`<sup>Optional</sup> <a name="FaultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.faultXPaths"></a>

```go
FaultXPaths *[]*string
```

- *Type:* *[]*string

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#fault_x_paths GoogleApigeeEnvironmentDebugmask#fault_x_paths}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#id GoogleApigeeEnvironmentDebugmask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.namespaces"></a>

```go
Namespaces *map[string]*string
```

- *Type:* *map[string]*string

Map of namespaces to URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#namespaces GoogleApigeeEnvironmentDebugmask#namespaces}

---

##### `RequestJsonPaths`<sup>Optional</sup> <a name="RequestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths"></a>

```go
RequestJsonPaths *[]*string
```

- *Type:* *[]*string

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#request_json_paths GoogleApigeeEnvironmentDebugmask#request_json_paths}

---

##### `RequestXPaths`<sup>Optional</sup> <a name="RequestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestXPaths"></a>

```go
RequestXPaths *[]*string
```

- *Type:* *[]*string

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#request_x_paths GoogleApigeeEnvironmentDebugmask#request_x_paths}

---

##### `ResponseJsonPaths`<sup>Optional</sup> <a name="ResponseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths"></a>

```go
ResponseJsonPaths *[]*string
```

- *Type:* *[]*string

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#response_json_paths GoogleApigeeEnvironmentDebugmask#response_json_paths}

---

##### `ResponseXPaths`<sup>Optional</sup> <a name="ResponseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseXPaths"></a>

```go
ResponseXPaths *[]*string
```

- *Type:* *[]*string

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#response_x_paths GoogleApigeeEnvironmentDebugmask#response_x_paths}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.timeouts"></a>

```go
Timeouts GoogleApigeeEnvironmentDebugmaskTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#timeouts GoogleApigeeEnvironmentDebugmask#timeouts}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.variables"></a>

```go
Variables *[]*string
```

- *Type:* *[]*string

List of variables that the debug mask applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#variables GoogleApigeeEnvironmentDebugmask#variables}

---

### GoogleApigeeEnvironmentDebugmaskTimeouts <a name="GoogleApigeeEnvironmentDebugmaskTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleapigeeenvironmentdebugmask"

&googleapigeeenvironmentdebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#create GoogleApigeeEnvironmentDebugmask#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#delete GoogleApigeeEnvironmentDebugmask#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#update GoogleApigeeEnvironmentDebugmask#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#create GoogleApigeeEnvironmentDebugmask#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#delete GoogleApigeeEnvironmentDebugmask#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#update GoogleApigeeEnvironmentDebugmask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference <a name="GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleapigeeenvironmentdebugmask"

googleapigeeenvironmentdebugmask.NewGoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



