# `googleAgentRegistryService` Submodule <a name="`googleAgentRegistryService` Submodule" id="@cdktn/provider-google-beta.googleAgentRegistryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAgentRegistryService <a name="GoogleAgentRegistryService" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service google_agent_registry_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.NewGoogleAgentRegistryService(scope Construct, id *string, config GoogleAgentRegistryServiceConfig) GoogleAgentRegistryService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig">GoogleAgentRegistryServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig">GoogleAgentRegistryServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putAgentSpec">PutAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putEndpointSpec">PutEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putInterfaces">PutInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putMcpServerSpec">PutMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetAgentSpec">ResetAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetEndpointSpec">ResetEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetInterfaces">ResetInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetMcpServerSpec">ResetMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentSpec` <a name="PutAgentSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putAgentSpec"></a>

```go
func PutAgentSpec(value GoogleAgentRegistryServiceAgentSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putAgentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a>

---

##### `PutEndpointSpec` <a name="PutEndpointSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putEndpointSpec"></a>

```go
func PutEndpointSpec(value GoogleAgentRegistryServiceEndpointSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a>

---

##### `PutInterfaces` <a name="PutInterfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putInterfaces"></a>

```go
func PutInterfaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putInterfaces.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMcpServerSpec` <a name="PutMcpServerSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putMcpServerSpec"></a>

```go
func PutMcpServerSpec(value GoogleAgentRegistryServiceMcpServerSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putMcpServerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAgentRegistryServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a>

---

##### `ResetAgentSpec` <a name="ResetAgentSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetAgentSpec"></a>

```go
func ResetAgentSpec()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEndpointSpec` <a name="ResetEndpointSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetEndpointSpec"></a>

```go
func ResetEndpointSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetId"></a>

```go
func ResetId()
```

##### `ResetInterfaces` <a name="ResetInterfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetInterfaces"></a>

```go
func ResetInterfaces()
```

##### `ResetMcpServerSpec` <a name="ResetMcpServerSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetMcpServerSpec"></a>

```go
func ResetMcpServerSpec()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleAgentRegistryService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.GoogleAgentRegistryService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.GoogleAgentRegistryService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.GoogleAgentRegistryService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.GoogleAgentRegistryService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleAgentRegistryService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAgentRegistryService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAgentRegistryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAgentRegistryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.agentSpec">AgentSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference">GoogleAgentRegistryServiceAgentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.endpointSpec">EndpointSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference">GoogleAgentRegistryServiceEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.interfaces">Interfaces</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList">GoogleAgentRegistryServiceInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.mcpServerSpec">McpServerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference">GoogleAgentRegistryServiceMcpServerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.registryResource">RegistryResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference">GoogleAgentRegistryServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.agentSpecInput">AgentSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.endpointSpecInput">EndpointSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.interfacesInput">InterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.mcpServerSpecInput">McpServerSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentSpec`<sup>Required</sup> <a name="AgentSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.agentSpec"></a>

```go
func AgentSpec() GoogleAgentRegistryServiceAgentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference">GoogleAgentRegistryServiceAgentSpecOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EndpointSpec`<sup>Required</sup> <a name="EndpointSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.endpointSpec"></a>

```go
func EndpointSpec() GoogleAgentRegistryServiceEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference">GoogleAgentRegistryServiceEndpointSpecOutputReference</a>

---

##### `Interfaces`<sup>Required</sup> <a name="Interfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.interfaces"></a>

```go
func Interfaces() GoogleAgentRegistryServiceInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList">GoogleAgentRegistryServiceInterfacesList</a>

---

##### `McpServerSpec`<sup>Required</sup> <a name="McpServerSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.mcpServerSpec"></a>

```go
func McpServerSpec() GoogleAgentRegistryServiceMcpServerSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference">GoogleAgentRegistryServiceMcpServerSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegistryResource`<sup>Required</sup> <a name="RegistryResource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.registryResource"></a>

```go
func RegistryResource() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.timeouts"></a>

```go
func Timeouts() GoogleAgentRegistryServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference">GoogleAgentRegistryServiceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AgentSpecInput`<sup>Optional</sup> <a name="AgentSpecInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.agentSpecInput"></a>

```go
func AgentSpecInput() GoogleAgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointSpecInput`<sup>Optional</sup> <a name="EndpointSpecInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.endpointSpecInput"></a>

```go
func EndpointSpecInput() GoogleAgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterfacesInput`<sup>Optional</sup> <a name="InterfacesInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.interfacesInput"></a>

```go
func InterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `McpServerSpecInput`<sup>Optional</sup> <a name="McpServerSpecInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.mcpServerSpecInput"></a>

```go
func McpServerSpecInput() GoogleAgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAgentRegistryServiceAgentSpec <a name="GoogleAgentRegistryServiceAgentSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

&googleagentregistryservice.GoogleAgentRegistryServiceAgentSpec {
	Type: *string,
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec.property.type">Type</a></code> | <code>*string</code> | The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec.property.content">Content</a></code> | <code>*string</code> | The content of the Agent spec in the JSON format. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#type GoogleAgentRegistryService#type}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec.property.content"></a>

```go
Content *string
```

- *Type:* *string

The content of the Agent spec in the JSON format.

This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#content GoogleAgentRegistryService#content}

---

### GoogleAgentRegistryServiceConfig <a name="GoogleAgentRegistryServiceConfig" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

&googleagentregistryservice.GoogleAgentRegistryServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ServiceId: *string,
	AgentSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	EndpointSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec,
	Id: *string,
	Interfaces: interface{},
	McpServerSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | The name of the Service. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.agentSpec">AgentSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a></code> | agent_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Service. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-defined display name for the Service. Can have a maximum length of 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.endpointSpec">EndpointSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#id GoogleAgentRegistryService#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.interfaces">Interfaces</a></code> | <code>interface{}</code> | interfaces block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.mcpServerSpec">McpServerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a></code> | mcp_server_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#project GoogleAgentRegistryService#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#location GoogleAgentRegistryService#location}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

The name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#service_id GoogleAgentRegistryService#service_id}

---

##### `AgentSpec`<sup>Optional</sup> <a name="AgentSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.agentSpec"></a>

```go
AgentSpec GoogleAgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a>

agent_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#agent_spec GoogleAgentRegistryService#agent_spec}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#deletion_policy GoogleAgentRegistryService#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#description GoogleAgentRegistryService#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-defined display name for the Service. Can have a maximum length of 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#display_name GoogleAgentRegistryService#display_name}

---

##### `EndpointSpec`<sup>Optional</sup> <a name="EndpointSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.endpointSpec"></a>

```go
EndpointSpec GoogleAgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#endpoint_spec GoogleAgentRegistryService#endpoint_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#id GoogleAgentRegistryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interfaces`<sup>Optional</sup> <a name="Interfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.interfaces"></a>

```go
Interfaces interface{}
```

- *Type:* interface{}

interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#interfaces GoogleAgentRegistryService#interfaces}

---

##### `McpServerSpec`<sup>Optional</sup> <a name="McpServerSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.mcpServerSpec"></a>

```go
McpServerSpec GoogleAgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a>

mcp_server_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#mcp_server_spec GoogleAgentRegistryService#mcp_server_spec}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#project GoogleAgentRegistryService#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.timeouts"></a>

```go
Timeouts GoogleAgentRegistryServiceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#timeouts GoogleAgentRegistryService#timeouts}

---

### GoogleAgentRegistryServiceEndpointSpec <a name="GoogleAgentRegistryServiceEndpointSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

&googleagentregistryservice.GoogleAgentRegistryServiceEndpointSpec {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec.property.type">Type</a></code> | <code>*string</code> | The type of the Endpoint spec content. Possible values: ["NO_SPEC"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the Endpoint spec content. Possible values: ["NO_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#type GoogleAgentRegistryService#type}

---

### GoogleAgentRegistryServiceInterfaces <a name="GoogleAgentRegistryServiceInterfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

&googleagentregistryservice.GoogleAgentRegistryServiceInterfaces {
	ProtocolBinding: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces.property.protocolBinding">ProtocolBinding</a></code> | <code>*string</code> | The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces.property.url">Url</a></code> | <code>*string</code> | The destination URL. |

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces.property.protocolBinding"></a>

```go
ProtocolBinding *string
```

- *Type:* *string

The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#protocol_binding GoogleAgentRegistryService#protocol_binding}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces.property.url"></a>

```go
Url *string
```

- *Type:* *string

The destination URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#url GoogleAgentRegistryService#url}

---

### GoogleAgentRegistryServiceMcpServerSpec <a name="GoogleAgentRegistryServiceMcpServerSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

&googleagentregistryservice.GoogleAgentRegistryServiceMcpServerSpec {
	Type: *string,
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec.property.type">Type</a></code> | <code>*string</code> | The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec.property.content">Content</a></code> | <code>*string</code> | The content of the MCP Server spec. This payload is validated against the schema for the specified type. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#type GoogleAgentRegistryService#type}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec.property.content"></a>

```go
Content *string
```

- *Type:* *string

The content of the MCP Server spec. This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#content GoogleAgentRegistryService#content}

---

### GoogleAgentRegistryServiceTimeouts <a name="GoogleAgentRegistryServiceTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

&googleagentregistryservice.GoogleAgentRegistryServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#create GoogleAgentRegistryService#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#delete GoogleAgentRegistryService#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#update GoogleAgentRegistryService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#create GoogleAgentRegistryService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#delete GoogleAgentRegistryService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_service#update GoogleAgentRegistryService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAgentRegistryServiceAgentSpecOutputReference <a name="GoogleAgentRegistryServiceAgentSpecOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.NewGoogleAgentRegistryServiceAgentSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAgentRegistryServiceAgentSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.resetContent"></a>

```go
func ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a>

---


### GoogleAgentRegistryServiceEndpointSpecOutputReference <a name="GoogleAgentRegistryServiceEndpointSpecOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.NewGoogleAgentRegistryServiceEndpointSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAgentRegistryServiceEndpointSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a>

---


### GoogleAgentRegistryServiceInterfacesList <a name="GoogleAgentRegistryServiceInterfacesList" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.NewGoogleAgentRegistryServiceInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAgentRegistryServiceInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.get"></a>

```go
func Get(index *f64) GoogleAgentRegistryServiceInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAgentRegistryServiceInterfacesOutputReference <a name="GoogleAgentRegistryServiceInterfacesOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.NewGoogleAgentRegistryServiceInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAgentRegistryServiceInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput">ProtocolBindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.protocolBinding">ProtocolBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtocolBindingInput`<sup>Optional</sup> <a name="ProtocolBindingInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput"></a>

```go
func ProtocolBindingInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.protocolBinding"></a>

```go
func ProtocolBinding() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAgentRegistryServiceMcpServerSpecOutputReference <a name="GoogleAgentRegistryServiceMcpServerSpecOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.NewGoogleAgentRegistryServiceMcpServerSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAgentRegistryServiceMcpServerSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.resetContent"></a>

```go
func ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a>

---


### GoogleAgentRegistryServiceTimeoutsOutputReference <a name="GoogleAgentRegistryServiceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistryservice"

googleagentregistryservice.NewGoogleAgentRegistryServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAgentRegistryServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



