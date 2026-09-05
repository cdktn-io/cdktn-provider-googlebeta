# `googleArtifactRegistryProjectConfig` Submodule <a name="`googleArtifactRegistryProjectConfig` Submodule" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryProjectConfig <a name="GoogleArtifactRegistryProjectConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config google_artifact_registry_project_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleartifactregistryprojectconfig"

googleartifactregistryprojectconfig.NewGoogleArtifactRegistryProjectConfig(scope Construct, id *string, config GoogleArtifactRegistryProjectConfigConfig) GoogleArtifactRegistryProjectConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig">GoogleArtifactRegistryProjectConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig">GoogleArtifactRegistryProjectConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig">PutPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetPlatformLogsConfig">ResetPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPlatformLogsConfig` <a name="PutPlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig"></a>

```go
func PutPlatformLogsConfig(value GoogleArtifactRegistryProjectConfigPlatformLogsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleArtifactRegistryProjectConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPlatformLogsConfig` <a name="ResetPlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetPlatformLogsConfig"></a>

```go
func ResetPlatformLogsConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleartifactregistryprojectconfig"

googleartifactregistryprojectconfig.GoogleArtifactRegistryProjectConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleartifactregistryprojectconfig"

googleartifactregistryprojectconfig.GoogleArtifactRegistryProjectConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleartifactregistryprojectconfig"

googleartifactregistryprojectconfig.GoogleArtifactRegistryProjectConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleartifactregistryprojectconfig"

googleartifactregistryprojectconfig.GoogleArtifactRegistryProjectConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleArtifactRegistryProjectConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleArtifactRegistryProjectConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleArtifactRegistryProjectConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfig">PlatformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference">GoogleArtifactRegistryProjectConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfigInput">PlatformLogsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PlatformLogsConfig`<sup>Required</sup> <a name="PlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfig"></a>

```go
func PlatformLogsConfig() GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeouts"></a>

```go
func Timeouts() GoogleArtifactRegistryProjectConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference">GoogleArtifactRegistryProjectConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PlatformLogsConfigInput`<sup>Optional</sup> <a name="PlatformLogsConfigInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfigInput"></a>

```go
func PlatformLogsConfigInput() GoogleArtifactRegistryProjectConfigPlatformLogsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryProjectConfigConfig <a name="GoogleArtifactRegistryProjectConfigConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleartifactregistryprojectconfig"

&googleartifactregistryprojectconfig.GoogleArtifactRegistryProjectConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Location: *string,
	PlatformLogsConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location this config is located in. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.platformLogsConfig">PlatformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | platform_logs_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#location GoogleArtifactRegistryProjectConfig#location}

---

##### `PlatformLogsConfig`<sup>Optional</sup> <a name="PlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.platformLogsConfig"></a>

```go
PlatformLogsConfig GoogleArtifactRegistryProjectConfigPlatformLogsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

platform_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#platform_logs_config GoogleArtifactRegistryProjectConfig#platform_logs_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleArtifactRegistryProjectConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#timeouts GoogleArtifactRegistryProjectConfig#timeouts}

---

### GoogleArtifactRegistryProjectConfigPlatformLogsConfig <a name="GoogleArtifactRegistryProjectConfigPlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleartifactregistryprojectconfig"

&googleartifactregistryprojectconfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig {
	LoggingState: *string,
	SeverityLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState">LoggingState</a></code> | <code>*string</code> | The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel">SeverityLevel</a></code> | <code>*string</code> | The severity level for the logs. |

---

##### `LoggingState`<sup>Optional</sup> <a name="LoggingState" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState"></a>

```go
LoggingState *string
```

- *Type:* *string

The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#logging_state GoogleArtifactRegistryProjectConfig#logging_state}

---

##### `SeverityLevel`<sup>Optional</sup> <a name="SeverityLevel" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel"></a>

```go
SeverityLevel *string
```

- *Type:* *string

The severity level for the logs.

Logs will be generated if their
severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#severity_level GoogleArtifactRegistryProjectConfig#severity_level}

---

### GoogleArtifactRegistryProjectConfigTimeouts <a name="GoogleArtifactRegistryProjectConfigTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleartifactregistryprojectconfig"

&googleartifactregistryprojectconfig.GoogleArtifactRegistryProjectConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#create GoogleArtifactRegistryProjectConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#delete GoogleArtifactRegistryProjectConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#update GoogleArtifactRegistryProjectConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#create GoogleArtifactRegistryProjectConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#delete GoogleArtifactRegistryProjectConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#update GoogleArtifactRegistryProjectConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference <a name="GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleartifactregistryprojectconfig"

googleartifactregistryprojectconfig.NewGoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState">ResetLoggingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel">ResetSeverityLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoggingState` <a name="ResetLoggingState" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState"></a>

```go
func ResetLoggingState()
```

##### `ResetSeverityLevel` <a name="ResetSeverityLevel" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel"></a>

```go
func ResetSeverityLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput">LoggingStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput">SeverityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState">LoggingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel">SeverityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingStateInput`<sup>Optional</sup> <a name="LoggingStateInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput"></a>

```go
func LoggingStateInput() *string
```

- *Type:* *string

---

##### `SeverityLevelInput`<sup>Optional</sup> <a name="SeverityLevelInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput"></a>

```go
func SeverityLevelInput() *string
```

- *Type:* *string

---

##### `LoggingState`<sup>Required</sup> <a name="LoggingState" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState"></a>

```go
func LoggingState() *string
```

- *Type:* *string

---

##### `SeverityLevel`<sup>Required</sup> <a name="SeverityLevel" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel"></a>

```go
func SeverityLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleArtifactRegistryProjectConfigPlatformLogsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---


### GoogleArtifactRegistryProjectConfigTimeoutsOutputReference <a name="GoogleArtifactRegistryProjectConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleartifactregistryprojectconfig"

googleartifactregistryprojectconfig.NewGoogleArtifactRegistryProjectConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleArtifactRegistryProjectConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



