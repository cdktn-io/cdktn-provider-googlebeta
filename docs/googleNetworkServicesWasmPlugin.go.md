# `googleNetworkServicesWasmPlugin` Submodule <a name="`googleNetworkServicesWasmPlugin` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesWasmPlugin <a name="GoogleNetworkServicesWasmPlugin" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin google_network_services_wasm_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.NewGoogleNetworkServicesWasmPlugin(scope Construct, id *string, config GoogleNetworkServicesWasmPluginConfig) GoogleNetworkServicesWasmPlugin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig">GoogleNetworkServicesWasmPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig">GoogleNetworkServicesWasmPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions">PutVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig"></a>

```go
func PutLogConfig(value GoogleNetworkServicesWasmPluginLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkServicesWasmPluginTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

---

##### `PutVersions` <a name="PutVersions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions"></a>

```go
func PutVersions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.GoogleNetworkServicesWasmPlugin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.GoogleNetworkServicesWasmPlugin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.GoogleNetworkServicesWasmPlugin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.GoogleNetworkServicesWasmPlugin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkServicesWasmPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkServicesWasmPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesWasmPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference">GoogleNetworkServicesWasmPluginLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference">GoogleNetworkServicesWasmPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.usedBy">UsedBy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList">GoogleNetworkServicesWasmPluginUsedByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versions">Versions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList">GoogleNetworkServicesWasmPluginVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionIdInput">MainVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versionsInput">VersionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionId">MainVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfig"></a>

```go
func LogConfig() GoogleNetworkServicesWasmPluginLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference">GoogleNetworkServicesWasmPluginLogConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkServicesWasmPluginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference">GoogleNetworkServicesWasmPluginTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `UsedBy`<sup>Required</sup> <a name="UsedBy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.usedBy"></a>

```go
func UsedBy() GoogleNetworkServicesWasmPluginUsedByList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList">GoogleNetworkServicesWasmPluginUsedByList</a>

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versions"></a>

```go
func Versions() GoogleNetworkServicesWasmPluginVersionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList">GoogleNetworkServicesWasmPluginVersionsList</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfigInput"></a>

```go
func LogConfigInput() GoogleNetworkServicesWasmPluginLogConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---

##### `MainVersionIdInput`<sup>Optional</sup> <a name="MainVersionIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionIdInput"></a>

```go
func MainVersionIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versionsInput"></a>

```go
func VersionsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MainVersionId`<sup>Required</sup> <a name="MainVersionId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionId"></a>

```go
func MainVersionId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesWasmPluginConfig <a name="GoogleNetworkServicesWasmPluginConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

&googlenetworkserviceswasmplugin.GoogleNetworkServicesWasmPluginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MainVersionId: *string,
	Name: *string,
	Versions: interface{},
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	LogConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.mainVersionId">MainVersionId</a></code> | <code>*string</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.name">Name</a></code> | <code>*string</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.versions">Versions</a></code> | <code>interface{}</code> | versions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.description">Description</a></code> | <code>*string</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.location">Location</a></code> | <code>*string</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MainVersionId`<sup>Required</sup> <a name="MainVersionId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.mainVersionId"></a>

```go
MainVersionId *string
```

- *Type:* *string

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#main_version_id GoogleNetworkServicesWasmPlugin#main_version_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#name GoogleNetworkServicesWasmPlugin#name}

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.versions"></a>

```go
Versions interface{}
```

- *Type:* interface{}

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#versions GoogleNetworkServicesWasmPlugin#versions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#deletion_policy GoogleNetworkServicesWasmPlugin#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#description GoogleNetworkServicesWasmPlugin#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#labels GoogleNetworkServicesWasmPlugin#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#location GoogleNetworkServicesWasmPlugin#location}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.logConfig"></a>

```go
LogConfig GoogleNetworkServicesWasmPluginLogConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#log_config GoogleNetworkServicesWasmPlugin#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkServicesWasmPluginTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#timeouts GoogleNetworkServicesWasmPlugin#timeouts}

---

### GoogleNetworkServicesWasmPluginLogConfig <a name="GoogleNetworkServicesWasmPluginLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

&googlenetworkserviceswasmplugin.GoogleNetworkServicesWasmPluginLogConfig {
	Enable: interface{},
	MinLogLevel: *string,
	SampleRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Optional. Specifies whether to enable logging for activity by this plugin. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.minLogLevel">MinLogLevel</a></code> | <code>*string</code> | Non-empty default. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | Non-empty default. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Optional. Specifies whether to enable logging for activity by this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#enable GoogleNetworkServicesWasmPlugin#enable}

---

##### `MinLogLevel`<sup>Optional</sup> <a name="MinLogLevel" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.minLogLevel"></a>

```go
MinLogLevel *string
```

- *Type:* *string

Non-empty default.

Specificies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code.
This field is can be set only if logging is enabled for the plugin.
If the field is not provided when logging is enabled, it is set to INFO by default. Possible values: ["LOG_LEVEL_UNSPECIFIED", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#min_log_level GoogleNetworkServicesWasmPlugin#min_log_level}

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.sampleRate"></a>

```go
SampleRate *f64
```

- *Type:* *f64

Non-empty default.

Configures the sampling rate of activity logs, where 1.0 means all logged activity is reported and 0.0 means no activity is reported.
A floating point value between 0.0 and 1.0 indicates that a percentage of log messages is stored.
The default value when logging is enabled is 1.0. The value of the field must be between 0 and 1 (inclusive).
This field can be specified only if logging is enabled for this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#sample_rate GoogleNetworkServicesWasmPlugin#sample_rate}

---

### GoogleNetworkServicesWasmPluginTimeouts <a name="GoogleNetworkServicesWasmPluginTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

&googlenetworkserviceswasmplugin.GoogleNetworkServicesWasmPluginTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#create GoogleNetworkServicesWasmPlugin#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#delete GoogleNetworkServicesWasmPlugin#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#update GoogleNetworkServicesWasmPlugin#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#create GoogleNetworkServicesWasmPlugin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#delete GoogleNetworkServicesWasmPlugin#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#update GoogleNetworkServicesWasmPlugin#update}.

---

### GoogleNetworkServicesWasmPluginUsedBy <a name="GoogleNetworkServicesWasmPluginUsedBy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

&googlenetworkserviceswasmplugin.GoogleNetworkServicesWasmPluginUsedBy {

}
```


### GoogleNetworkServicesWasmPluginVersions <a name="GoogleNetworkServicesWasmPluginVersions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

&googlenetworkserviceswasmplugin.GoogleNetworkServicesWasmPluginVersions {
	VersionName: *string,
	Description: *string,
	ImageUri: *string,
	Labels: *map[string]*string,
	PluginConfigData: *string,
	PluginConfigUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.versionName">VersionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#version_name GoogleNetworkServicesWasmPlugin#version_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.description">Description</a></code> | <code>*string</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.imageUri">ImageUri</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigData">PluginConfigData</a></code> | <code>*string</code> | A base64-encoded string containing the configuration for the plugin. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigUri">PluginConfigUri</a></code> | <code>*string</code> | URI of the plugin configuration stored in the Artifact Registry. |

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.versionName"></a>

```go
VersionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#version_name GoogleNetworkServicesWasmPlugin#version_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#description GoogleNetworkServicesWasmPlugin#description}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

Optional.

URI of the container image containing the plugin, stored in the Artifact Registry. When a new WasmPluginVersion resource is created, the digest of the container image is saved in the imageDigest field.
When downloading an image, the digest value is used instead of an image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#image_uri GoogleNetworkServicesWasmPlugin#image_uri}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Set of labels associated with the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#labels GoogleNetworkServicesWasmPlugin#labels}

---

##### `PluginConfigData`<sup>Optional</sup> <a name="PluginConfigData" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigData"></a>

```go
PluginConfigData *string
```

- *Type:* *string

A base64-encoded string containing the configuration for the plugin.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
When a new WasmPluginVersion resource is created, the digest of the contents is saved in the pluginConfigDigest field.
Conflics with pluginConfigUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#plugin_config_data GoogleNetworkServicesWasmPlugin#plugin_config_data}

---

##### `PluginConfigUri`<sup>Optional</sup> <a name="PluginConfigUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigUri"></a>

```go
PluginConfigUri *string
```

- *Type:* *string

URI of the plugin configuration stored in the Artifact Registry.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
The container image must contain only a single file with the name plugin.config.
When a new WasmPluginVersion resource is created, the digest of the container image is saved in the pluginConfigDigest field.
Conflics with pluginConfigData.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_wasm_plugin#plugin_config_uri GoogleNetworkServicesWasmPlugin#plugin_config_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesWasmPluginLogConfigOutputReference <a name="GoogleNetworkServicesWasmPluginLogConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.NewGoogleNetworkServicesWasmPluginLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesWasmPluginLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel">ResetMinLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetMinLogLevel` <a name="ResetMinLogLevel" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel"></a>

```go
func ResetMinLogLevel()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate"></a>

```go
func ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput">MinLogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel">MinLogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `MinLogLevelInput`<sup>Optional</sup> <a name="MinLogLevelInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput"></a>

```go
func MinLogLevelInput() *string
```

- *Type:* *string

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput"></a>

```go
func SampleRateInput() *f64
```

- *Type:* *f64

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `MinLogLevel`<sup>Required</sup> <a name="MinLogLevel" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel"></a>

```go
func MinLogLevel() *string
```

- *Type:* *string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate"></a>

```go
func SampleRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesWasmPluginLogConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---


### GoogleNetworkServicesWasmPluginTimeoutsOutputReference <a name="GoogleNetworkServicesWasmPluginTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.NewGoogleNetworkServicesWasmPluginTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesWasmPluginTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesWasmPluginUsedByList <a name="GoogleNetworkServicesWasmPluginUsedByList" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.NewGoogleNetworkServicesWasmPluginUsedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesWasmPluginUsedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesWasmPluginUsedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleNetworkServicesWasmPluginUsedByOutputReference <a name="GoogleNetworkServicesWasmPluginUsedByOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.NewGoogleNetworkServicesWasmPluginUsedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesWasmPluginUsedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy">GoogleNetworkServicesWasmPluginUsedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesWasmPluginUsedBy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy">GoogleNetworkServicesWasmPluginUsedBy</a>

---


### GoogleNetworkServicesWasmPluginVersionsList <a name="GoogleNetworkServicesWasmPluginVersionsList" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.NewGoogleNetworkServicesWasmPluginVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesWasmPluginVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesWasmPluginVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesWasmPluginVersionsOutputReference <a name="GoogleNetworkServicesWasmPluginVersionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkserviceswasmplugin"

googlenetworkserviceswasmplugin.NewGoogleNetworkServicesWasmPluginVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesWasmPluginVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData">ResetPluginConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri">ResetPluginConfigUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetImageUri"></a>

```go
func ResetImageUri()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetPluginConfigData` <a name="ResetPluginConfigData" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData"></a>

```go
func ResetPluginConfigData()
```

##### `ResetPluginConfigUri` <a name="ResetPluginConfigUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri"></a>

```go
func ResetPluginConfigUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest">PluginConfigDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput">PluginConfigDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput">PluginConfigUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput">VersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData">PluginConfigData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri">PluginConfigUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageDigest"></a>

```go
func ImageDigest() *string
```

- *Type:* *string

---

##### `PluginConfigDigest`<sup>Required</sup> <a name="PluginConfigDigest" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest"></a>

```go
func PluginConfigDigest() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PluginConfigDataInput`<sup>Optional</sup> <a name="PluginConfigDataInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput"></a>

```go
func PluginConfigDataInput() *string
```

- *Type:* *string

---

##### `PluginConfigUriInput`<sup>Optional</sup> <a name="PluginConfigUriInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput"></a>

```go
func PluginConfigUriInput() *string
```

- *Type:* *string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput"></a>

```go
func VersionNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PluginConfigData`<sup>Required</sup> <a name="PluginConfigData" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData"></a>

```go
func PluginConfigData() *string
```

- *Type:* *string

---

##### `PluginConfigUri`<sup>Required</sup> <a name="PluginConfigUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri"></a>

```go
func PluginConfigUri() *string
```

- *Type:* *string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



