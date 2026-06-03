# `googleCesSecuritySettings` Submodule <a name="`googleCesSecuritySettings` Submodule" id="@cdktn/provider-google-beta.googleCesSecuritySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesSecuritySettings <a name="GoogleCesSecuritySettings" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings google_ces_security_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecessecuritysettings"

googlecessecuritysettings.NewGoogleCesSecuritySettings(scope Construct, id *string, config GoogleCesSecuritySettingsConfig) GoogleCesSecuritySettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig">GoogleCesSecuritySettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig">GoogleCesSecuritySettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putEndpointControlPolicy">PutEndpointControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetEndpointControlPolicy">ResetEndpointControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointControlPolicy` <a name="PutEndpointControlPolicy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putEndpointControlPolicy"></a>

```go
func PutEndpointControlPolicy(value GoogleCesSecuritySettingsEndpointControlPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putEndpointControlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCesSecuritySettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a>

---

##### `ResetEndpointControlPolicy` <a name="ResetEndpointControlPolicy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetEndpointControlPolicy"></a>

```go
func ResetEndpointControlPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesSecuritySettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecessecuritysettings"

googlecessecuritysettings.GoogleCesSecuritySettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecessecuritysettings"

googlecessecuritysettings.GoogleCesSecuritySettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecessecuritysettings"

googlecessecuritysettings.GoogleCesSecuritySettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecessecuritysettings"

googlecessecuritysettings.GoogleCesSecuritySettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleCesSecuritySettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCesSecuritySettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCesSecuritySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesSecuritySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.endpointControlPolicy">EndpointControlPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference">GoogleCesSecuritySettingsEndpointControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference">GoogleCesSecuritySettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.endpointControlPolicyInput">EndpointControlPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EndpointControlPolicy`<sup>Required</sup> <a name="EndpointControlPolicy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.endpointControlPolicy"></a>

```go
func EndpointControlPolicy() GoogleCesSecuritySettingsEndpointControlPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference">GoogleCesSecuritySettingsEndpointControlPolicyOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.timeouts"></a>

```go
func Timeouts() GoogleCesSecuritySettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference">GoogleCesSecuritySettingsTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EndpointControlPolicyInput`<sup>Optional</sup> <a name="EndpointControlPolicyInput" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.endpointControlPolicyInput"></a>

```go
func EndpointControlPolicyInput() GoogleCesSecuritySettingsEndpointControlPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesSecuritySettingsConfig <a name="GoogleCesSecuritySettingsConfig" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecessecuritysettings"

&googlecessecuritysettings.GoogleCesSecuritySettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	EndpointControlPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.location">Location</a></code> | <code>*string</code> | The location of the security settings. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.endpointControlPolicy">EndpointControlPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a></code> | endpoint_control_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#id GoogleCesSecuritySettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#project GoogleCesSecuritySettings#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the security settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#location GoogleCesSecuritySettings#location}

---

##### `EndpointControlPolicy`<sup>Optional</sup> <a name="EndpointControlPolicy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.endpointControlPolicy"></a>

```go
EndpointControlPolicy GoogleCesSecuritySettingsEndpointControlPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a>

endpoint_control_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#endpoint_control_policy GoogleCesSecuritySettings#endpoint_control_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#id GoogleCesSecuritySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#project GoogleCesSecuritySettings#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.timeouts"></a>

```go
Timeouts GoogleCesSecuritySettingsTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#timeouts GoogleCesSecuritySettings#timeouts}

---

### GoogleCesSecuritySettingsEndpointControlPolicy <a name="GoogleCesSecuritySettingsEndpointControlPolicy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecessecuritysettings"

&googlecessecuritysettings.GoogleCesSecuritySettingsEndpointControlPolicy {
	AllowedOrigins: *[]*string,
	EnforcementScope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Optional. The allowed HTTP(s) origins that tools in the App are able to directly call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy.property.enforcementScope">EnforcementScope</a></code> | <code>*string</code> | Optional. The scope in which this policy's allowedOrigins list is enforced. Possible values: ["ENFORCEMENT_SCOPE_UNSPECIFIED", "VPCSC_ONLY", "ALWAYS"]. |

---

##### `AllowedOrigins`<sup>Optional</sup> <a name="AllowedOrigins" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Optional. The allowed HTTP(s) origins that tools in the App are able to directly call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#allowed_origins GoogleCesSecuritySettings#allowed_origins}

---

##### `EnforcementScope`<sup>Optional</sup> <a name="EnforcementScope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy.property.enforcementScope"></a>

```go
EnforcementScope *string
```

- *Type:* *string

Optional. The scope in which this policy's allowedOrigins list is enforced. Possible values: ["ENFORCEMENT_SCOPE_UNSPECIFIED", "VPCSC_ONLY", "ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#enforcement_scope GoogleCesSecuritySettings#enforcement_scope}

---

### GoogleCesSecuritySettingsTimeouts <a name="GoogleCesSecuritySettingsTimeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecessecuritysettings"

&googlecessecuritysettings.GoogleCesSecuritySettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#create GoogleCesSecuritySettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#delete GoogleCesSecuritySettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#update GoogleCesSecuritySettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#create GoogleCesSecuritySettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#delete GoogleCesSecuritySettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_security_settings#update GoogleCesSecuritySettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesSecuritySettingsEndpointControlPolicyOutputReference <a name="GoogleCesSecuritySettingsEndpointControlPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecessecuritysettings"

googlecessecuritysettings.NewGoogleCesSecuritySettingsEndpointControlPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesSecuritySettingsEndpointControlPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resetAllowedOrigins">ResetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resetEnforcementScope">ResetEnforcementScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedOrigins` <a name="ResetAllowedOrigins" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resetAllowedOrigins"></a>

```go
func ResetAllowedOrigins()
```

##### `ResetEnforcementScope` <a name="ResetEnforcementScope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resetEnforcementScope"></a>

```go
func ResetEnforcementScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.enforcementScopeInput">EnforcementScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.enforcementScope">EnforcementScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnforcementScopeInput`<sup>Optional</sup> <a name="EnforcementScopeInput" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.enforcementScopeInput"></a>

```go
func EnforcementScopeInput() *string
```

- *Type:* *string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `EnforcementScope`<sup>Required</sup> <a name="EnforcementScope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.enforcementScope"></a>

```go
func EnforcementScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesSecuritySettingsEndpointControlPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a>

---


### GoogleCesSecuritySettingsTimeoutsOutputReference <a name="GoogleCesSecuritySettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecessecuritysettings"

googlecessecuritysettings.NewGoogleCesSecuritySettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesSecuritySettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



