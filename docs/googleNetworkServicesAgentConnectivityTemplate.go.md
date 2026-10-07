# `googleNetworkServicesAgentConnectivityTemplate` Submodule <a name="`googleNetworkServicesAgentConnectivityTemplate` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesAgentConnectivityTemplate <a name="GoogleNetworkServicesAgentConnectivityTemplate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template google_network_services_agent_connectivity_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

googlenetworkservicesagentconnectivitytemplate.NewGoogleNetworkServicesAgentConnectivityTemplate(scope Construct, id *string, config GoogleNetworkServicesAgentConnectivityTemplateConfig) GoogleNetworkServicesAgentConnectivityTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig">GoogleNetworkServicesAgentConnectivityTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig">GoogleNetworkServicesAgentConnectivityTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig">PutEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetAccessTypes">ResetAccessTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig">ResetEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressNetworkConfig` <a name="PutEgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig"></a>

```go
func PutEgressNetworkConfig(value GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkServicesAgentConnectivityTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `ResetAccessTypes` <a name="ResetAccessTypes" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetAccessTypes"></a>

```go
func ResetAccessTypes()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEgressNetworkConfig` <a name="ResetEgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig"></a>

```go
func ResetEgressNetworkConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

googlenetworkservicesagentconnectivitytemplate.GoogleNetworkServicesAgentConnectivityTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

googlenetworkservicesagentconnectivitytemplate.GoogleNetworkServicesAgentConnectivityTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

googlenetworkservicesagentconnectivitytemplate.GoogleNetworkServicesAgentConnectivityTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

googlenetworkservicesagentconnectivitytemplate.GoogleNetworkServicesAgentConnectivityTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkServicesAgentConnectivityTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkServicesAgentConnectivityTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesAgentConnectivityTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig">EgressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPathInput">AccessPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypesInput">AccessTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput">AgentConnectivityTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput">EgressNetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPath">AccessPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypes">AccessTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId">AgentConnectivityTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EgressNetworkConfig`<sup>Required</sup> <a name="EgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig"></a>

```go
func EgressNetworkConfig() GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AccessPathInput`<sup>Optional</sup> <a name="AccessPathInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPathInput"></a>

```go
func AccessPathInput() *string
```

- *Type:* *string

---

##### `AccessTypesInput`<sup>Optional</sup> <a name="AccessTypesInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypesInput"></a>

```go
func AccessTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AgentConnectivityTemplateIdInput`<sup>Optional</sup> <a name="AgentConnectivityTemplateIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput"></a>

```go
func AgentConnectivityTemplateIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EgressNetworkConfigInput`<sup>Optional</sup> <a name="EgressNetworkConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput"></a>

```go
func EgressNetworkConfigInput() GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessPath`<sup>Required</sup> <a name="AccessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPath"></a>

```go
func AccessPath() *string
```

- *Type:* *string

---

##### `AccessTypes`<sup>Required</sup> <a name="AccessTypes" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypes"></a>

```go
func AccessTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AgentConnectivityTemplateId`<sup>Required</sup> <a name="AgentConnectivityTemplateId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId"></a>

```go
func AgentConnectivityTemplateId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesAgentConnectivityTemplateConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

&googlenetworkservicesagentconnectivitytemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessPath: *string,
	AgentConnectivityTemplateId: *string,
	Location: *string,
	AccessTypes: *[]*string,
	DeletionPolicy: *string,
	Description: *string,
	EgressNetworkConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessPath">AccessPath</a></code> | <code>*string</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId">AgentConnectivityTemplateId</a></code> | <code>*string</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.location">Location</a></code> | <code>*string</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessTypes">AccessTypes</a></code> | <code>*[]*string</code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig">EgressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessPath`<sup>Required</sup> <a name="AccessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessPath"></a>

```go
AccessPath *string
```

- *Type:* *string

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_path GoogleNetworkServicesAgentConnectivityTemplate#access_path}

---

##### `AgentConnectivityTemplateId`<sup>Required</sup> <a name="AgentConnectivityTemplateId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId"></a>

```go
AgentConnectivityTemplateId *string
```

- *Type:* *string

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#agent_connectivity_template_id GoogleNetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#location GoogleNetworkServicesAgentConnectivityTemplate#location}

---

##### `AccessTypes`<sup>Optional</sup> <a name="AccessTypes" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessTypes"></a>

```go
AccessTypes *[]*string
```

- *Type:* *[]*string

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_types GoogleNetworkServicesAgentConnectivityTemplate#access_types}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#deletion_policy GoogleNetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#description GoogleNetworkServicesAgentConnectivityTemplate#description}

---

##### `EgressNetworkConfig`<sup>Optional</sup> <a name="EgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig"></a>

```go
EgressNetworkConfig GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#egress_network_config GoogleNetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#labels GoogleNetworkServicesAgentConnectivityTemplate#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkServicesAgentConnectivityTemplateTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#timeouts GoogleNetworkServicesAgentConnectivityTemplate#timeouts}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

&googlenetworkservicesagentconnectivitytemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig {
	DnsPeeringConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig,
	NetworkAttachment: *string,
	TlsConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig,
	VpcEgress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig">DnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | dns_peering_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress">VpcEgress</a></code> | <code>*string</code> | The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `DnsPeeringConfig`<sup>Optional</sup> <a name="DnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig"></a>

```go
DnsPeeringConfig GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#dns_peering_config GoogleNetworkServicesAgentConnectivityTemplate#dns_peering_config}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#network_attachment GoogleNetworkServicesAgentConnectivityTemplate#network_attachment}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig"></a>

```go
TlsConfig GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#tls_config GoogleNetworkServicesAgentConnectivityTemplate#tls_config}

---

##### `VpcEgress`<sup>Optional</sup> <a name="VpcEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress"></a>

```go
VpcEgress *string
```

- *Type:* *string

The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#vpc_egress GoogleNetworkServicesAgentConnectivityTemplate#vpc_egress}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

&googlenetworkservicesagentconnectivitytemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig {
	TargetNetwork: *string,
	Domain: *string,
	Domains: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain">Domain</a></code> | <code>*string</code> | The domain name to peer for DNS resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains">Domains</a></code> | <code>*[]*string</code> | The list of domain names to peer for DNS resolution. |

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork"></a>

```go
TargetNetwork *string
```

- *Type:* *string

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#target_network GoogleNetworkServicesAgentConnectivityTemplate#target_network}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The domain name to peer for DNS resolution.

Must be a fully
qualified domain name ending with a dot (for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#domain GoogleNetworkServicesAgentConnectivityTemplate#domain}

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains"></a>

```go
Domains *[]*string
```

- *Type:* *[]*string

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.'). At least one domain must be
specified between 'domain' and 'domains'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#domains GoogleNetworkServicesAgentConnectivityTemplate#domains}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

&googlenetworkservicesagentconnectivitytemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig {
	AdditionalRoots: *string,
	TrustConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots">AdditionalRoots</a></code> | <code>*string</code> | Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig">TrustConfig</a></code> | <code>*string</code> | The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}. |

---

##### `AdditionalRoots`<sup>Required</sup> <a name="AdditionalRoots" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots"></a>

```go
AdditionalRoots *string
```

- *Type:* *string

Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#additional_roots GoogleNetworkServicesAgentConnectivityTemplate#additional_roots}

---

##### `TrustConfig`<sup>Optional</sup> <a name="TrustConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig"></a>

```go
TrustConfig *string
```

- *Type:* *string

The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#trust_config GoogleNetworkServicesAgentConnectivityTemplate#trust_config}

---

### GoogleNetworkServicesAgentConnectivityTemplateTimeouts <a name="GoogleNetworkServicesAgentConnectivityTemplateTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

&googlenetworkservicesagentconnectivitytemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#create GoogleNetworkServicesAgentConnectivityTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#delete GoogleNetworkServicesAgentConnectivityTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#update GoogleNetworkServicesAgentConnectivityTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#create GoogleNetworkServicesAgentConnectivityTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#delete GoogleNetworkServicesAgentConnectivityTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#update GoogleNetworkServicesAgentConnectivityTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

googlenetworkservicesagentconnectivitytemplate.NewGoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetDomains` <a name="ResetDomains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains"></a>

```go
func ResetDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput">DomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput"></a>

```go
func DomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput"></a>

```go
func TargetNetworkInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork"></a>

```go
func TargetNetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

googlenetworkservicesagentconnectivitytemplate.NewGoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig">PutDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig">ResetDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress">ResetVpcEgress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfig` <a name="PutDnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig"></a>

```go
func PutDnsPeeringConfig(value GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig"></a>

```go
func PutTlsConfig(value GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `ResetDnsPeeringConfig` <a name="ResetDnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig"></a>

```go
func ResetDnsPeeringConfig()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment"></a>

```go
func ResetNetworkAttachment()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig"></a>

```go
func ResetTlsConfig()
```

##### `ResetVpcEgress` <a name="ResetVpcEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress"></a>

```go
func ResetVpcEgress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig">DnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput">DnsPeeringConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput">VpcEgressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress">VpcEgress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsPeeringConfig`<sup>Required</sup> <a name="DnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig"></a>

```go
func DnsPeeringConfig() GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig"></a>

```go
func TlsConfig() GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a>

---

##### `DnsPeeringConfigInput`<sup>Optional</sup> <a name="DnsPeeringConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput"></a>

```go
func DnsPeeringConfigInput() GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput"></a>

```go
func TlsConfigInput() GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `VpcEgressInput`<sup>Optional</sup> <a name="VpcEgressInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput"></a>

```go
func VpcEgressInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `VpcEgress`<sup>Required</sup> <a name="VpcEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress"></a>

```go
func VpcEgress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

googlenetworkservicesagentconnectivitytemplate.NewGoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig">ResetTrustConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTrustConfig` <a name="ResetTrustConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig"></a>

```go
func ResetTrustConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput">AdditionalRootsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput">TrustConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots">AdditionalRoots</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig">TrustConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRootsInput`<sup>Optional</sup> <a name="AdditionalRootsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput"></a>

```go
func AdditionalRootsInput() *string
```

- *Type:* *string

---

##### `TrustConfigInput`<sup>Optional</sup> <a name="TrustConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput"></a>

```go
func TrustConfigInput() *string
```

- *Type:* *string

---

##### `AdditionalRoots`<sup>Required</sup> <a name="AdditionalRoots" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots"></a>

```go
func AdditionalRoots() *string
```

- *Type:* *string

---

##### `TrustConfig`<sup>Required</sup> <a name="TrustConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig"></a>

```go
func TrustConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlenetworkservicesagentconnectivitytemplate"

googlenetworkservicesagentconnectivitytemplate.NewGoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



