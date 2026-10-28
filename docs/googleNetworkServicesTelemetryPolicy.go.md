# `googleNetworkServicesTelemetryPolicy` Submodule <a name="`googleNetworkServicesTelemetryPolicy` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesTelemetryPolicy <a name="GoogleNetworkServicesTelemetryPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy google_network_services_telemetry_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.NewGoogleNetworkServicesTelemetryPolicy(scope Construct, id *string, config GoogleNetworkServicesTelemetryPolicyConfig) GoogleNetworkServicesTelemetryPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig">GoogleNetworkServicesTelemetryPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig">GoogleNetworkServicesTelemetryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration">PutMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget">PutTelemetryTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration">PutTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetMetricsConfiguration">ResetMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTracingConfiguration">ResetTracingConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetricsConfiguration` <a name="PutMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration"></a>

```go
func PutMetricsConfiguration(value GoogleNetworkServicesTelemetryPolicyMetricsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---

##### `PutTelemetryTarget` <a name="PutTelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget"></a>

```go
func PutTelemetryTarget(value GoogleNetworkServicesTelemetryPolicyTelemetryTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkServicesTelemetryPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---

##### `PutTracingConfiguration` <a name="PutTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration"></a>

```go
func PutTracingConfiguration(value GoogleNetworkServicesTelemetryPolicyTracingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMetricsConfiguration` <a name="ResetMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetMetricsConfiguration"></a>

```go
func ResetMetricsConfiguration()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTracingConfiguration` <a name="ResetTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTracingConfiguration"></a>

```go
func ResetTracingConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkServicesTelemetryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkServicesTelemetryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesTelemetryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfiguration">MetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTarget">TelemetryTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference">GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference">GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfiguration">TracingConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfigurationInput">MetricsConfigurationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTargetInput">TelemetryTargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfigurationInput">TracingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `MetricsConfiguration`<sup>Required</sup> <a name="MetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfiguration"></a>

```go
func MetricsConfiguration() GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference</a>

---

##### `TelemetryTarget`<sup>Required</sup> <a name="TelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTarget"></a>

```go
func TelemetryTarget() GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference">GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference">GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference</a>

---

##### `TracingConfiguration`<sup>Required</sup> <a name="TracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfiguration"></a>

```go
func TracingConfiguration() GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetricsConfigurationInput`<sup>Optional</sup> <a name="MetricsConfigurationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfigurationInput"></a>

```go
func MetricsConfigurationInput() GoogleNetworkServicesTelemetryPolicyMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TelemetryTargetInput`<sup>Optional</sup> <a name="TelemetryTargetInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTargetInput"></a>

```go
func TelemetryTargetInput() GoogleNetworkServicesTelemetryPolicyTelemetryTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TracingConfigurationInput`<sup>Optional</sup> <a name="TracingConfigurationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfigurationInput"></a>

```go
func TracingConfigurationInput() GoogleNetworkServicesTelemetryPolicyTracingConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesTelemetryPolicyConfig <a name="GoogleNetworkServicesTelemetryPolicyConfig" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

&googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	TelemetryTarget: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	MetricsConfiguration: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts,
	TracingConfiguration: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Short name of the TelemetryPolicy resource to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.telemetryTarget">TelemetryTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | telemetry_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Provides a human-readable name for the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the TelemetryPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.metricsConfiguration">MetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | metrics_configuration block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.tracingConfiguration">TracingConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | tracing_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Short name of the TelemetryPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#name GoogleNetworkServicesTelemetryPolicy#name}

---

##### `TelemetryTarget`<sup>Required</sup> <a name="TelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.telemetryTarget"></a>

```go
TelemetryTarget GoogleNetworkServicesTelemetryPolicyTelemetryTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

telemetry_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#telemetry_target GoogleNetworkServicesTelemetryPolicy#telemetry_target}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#deletion_policy GoogleNetworkServicesTelemetryPolicy#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Provides a human-readable name for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#display_name GoogleNetworkServicesTelemetryPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the TelemetryPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#labels GoogleNetworkServicesTelemetryPolicy#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#location GoogleNetworkServicesTelemetryPolicy#location}

---

##### `MetricsConfiguration`<sup>Optional</sup> <a name="MetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.metricsConfiguration"></a>

```go
MetricsConfiguration GoogleNetworkServicesTelemetryPolicyMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

metrics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#metrics_configuration GoogleNetworkServicesTelemetryPolicy#metrics_configuration}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkServicesTelemetryPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#timeouts GoogleNetworkServicesTelemetryPolicy#timeouts}

---

##### `TracingConfiguration`<sup>Optional</sup> <a name="TracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.tracingConfiguration"></a>

```go
TracingConfiguration GoogleNetworkServicesTelemetryPolicyTracingConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#tracing_configuration GoogleNetworkServicesTelemetryPolicy#tracing_configuration}

---

### GoogleNetworkServicesTelemetryPolicyMetricsConfiguration <a name="GoogleNetworkServicesTelemetryPolicyMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

&googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

### GoogleNetworkServicesTelemetryPolicyTelemetryTarget <a name="GoogleNetworkServicesTelemetryPolicyTelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

&googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget {
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.property.resources">Resources</a></code> | <code>*[]*string</code> | Lists references to the resources that are targeted by the policy. |

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Lists references to the resources that are targeted by the policy.

Types of resources supported:

* 'run.googleapis.com/'
* 'compute.googleapis.com/'
* 'networkservices.googleapis.com/'
  The format must be the full resource name of a supported resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#resources GoogleNetworkServicesTelemetryPolicy#resources}

---

### GoogleNetworkServicesTelemetryPolicyTimeouts <a name="GoogleNetworkServicesTelemetryPolicyTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

&googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}.

---

### GoogleNetworkServicesTelemetryPolicyTracingConfiguration <a name="GoogleNetworkServicesTelemetryPolicyTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

&googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration {
	CustomSpanAttributes: interface{},
	ParentBasedSampling: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling,
	SamplingRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.customSpanAttributes">CustomSpanAttributes</a></code> | <code>interface{}</code> | custom_span_attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.parentBasedSampling">ParentBasedSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | parent_based_sampling block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | Specifies the tracing sampling rate. |

---

##### `CustomSpanAttributes`<sup>Optional</sup> <a name="CustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.customSpanAttributes"></a>

```go
CustomSpanAttributes interface{}
```

- *Type:* interface{}

custom_span_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#custom_span_attributes GoogleNetworkServicesTelemetryPolicy#custom_span_attributes}

---

##### `ParentBasedSampling`<sup>Optional</sup> <a name="ParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.parentBasedSampling"></a>

```go
ParentBasedSampling GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

parent_based_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#parent_based_sampling GoogleNetworkServicesTelemetryPolicy#parent_based_sampling}

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.samplingRate"></a>

```go
SamplingRate *f64
```

- *Type:* *f64

Specifies the tracing sampling rate.

The sampling rate is a float number in the interval [0, 1]. The sampling rate is applied to all requests to the targeted resources. The default value is 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

&googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes {
	AttributeName: *string,
	FromHeaderValue: *string,
	LiteralValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.attributeName">AttributeName</a></code> | <code>*string</code> | Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.fromHeaderValue">FromHeaderValue</a></code> | <code>*string</code> | Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.literalValue">LiteralValue</a></code> | <code>*string</code> | Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName. |

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#attribute_name GoogleNetworkServicesTelemetryPolicy#attribute_name}

---

##### `FromHeaderValue`<sup>Optional</sup> <a name="FromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.fromHeaderValue"></a>

```go
FromHeaderValue *string
```

- *Type:* *string

Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted.

Mutually exclusive with literalValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#from_header_value GoogleNetworkServicesTelemetryPolicy#from_header_value}

---

##### `LiteralValue`<sup>Optional</sup> <a name="LiteralValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.literalValue"></a>

```go
LiteralValue *string
```

- *Type:* *string

Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName.

Mutually exclusive with fromHeaderValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#literal_value GoogleNetworkServicesTelemetryPolicy#literal_value}

---

### GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

&googlenetworkservicestelemetrypolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling {
	Enabled: interface{},
	SamplingRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.enabled">Enabled</a></code> | <code>interface{}</code> | Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.samplingRate"></a>

```go
SamplingRate *f64
```

- *Type:* *f64

Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference <a name="GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.NewGoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesTelemetryPolicyMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---


### GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.NewGoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesTelemetryPolicyTelemetryTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---


### GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.NewGoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.NewGoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.NewGoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetFromHeaderValue">ResetFromHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetLiteralValue">ResetLiteralValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromHeaderValue` <a name="ResetFromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetFromHeaderValue"></a>

```go
func ResetFromHeaderValue()
```

##### `ResetLiteralValue` <a name="ResetLiteralValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetLiteralValue"></a>

```go
func ResetLiteralValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValueInput">FromHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValueInput">LiteralValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValue">FromHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValue">LiteralValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `FromHeaderValueInput`<sup>Optional</sup> <a name="FromHeaderValueInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValueInput"></a>

```go
func FromHeaderValueInput() *string
```

- *Type:* *string

---

##### `LiteralValueInput`<sup>Optional</sup> <a name="LiteralValueInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValueInput"></a>

```go
func LiteralValueInput() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `FromHeaderValue`<sup>Required</sup> <a name="FromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValue"></a>

```go
func FromHeaderValue() *string
```

- *Type:* *string

---

##### `LiteralValue`<sup>Required</sup> <a name="LiteralValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValue"></a>

```go
func LiteralValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.NewGoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes">PutCustomSpanAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling">PutParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetCustomSpanAttributes">ResetCustomSpanAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetParentBasedSampling">ResetParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomSpanAttributes` <a name="PutCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes"></a>

```go
func PutCustomSpanAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParentBasedSampling` <a name="PutParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling"></a>

```go
func PutParentBasedSampling(value GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---

##### `ResetCustomSpanAttributes` <a name="ResetCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetCustomSpanAttributes"></a>

```go
func ResetCustomSpanAttributes()
```

##### `ResetParentBasedSampling` <a name="ResetParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetParentBasedSampling"></a>

```go
func ResetParentBasedSampling()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetSamplingRate"></a>

```go
func ResetSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributes">CustomSpanAttributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSampling">ParentBasedSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributesInput">CustomSpanAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSamplingInput">ParentBasedSamplingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRateInput">SamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSpanAttributes`<sup>Required</sup> <a name="CustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributes"></a>

```go
func CustomSpanAttributes() GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList</a>

---

##### `ParentBasedSampling`<sup>Required</sup> <a name="ParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSampling"></a>

```go
func ParentBasedSampling() GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference</a>

---

##### `CustomSpanAttributesInput`<sup>Optional</sup> <a name="CustomSpanAttributesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributesInput"></a>

```go
func CustomSpanAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `ParentBasedSamplingInput`<sup>Optional</sup> <a name="ParentBasedSamplingInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSamplingInput"></a>

```go
func ParentBasedSamplingInput() GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRateInput"></a>

```go
func SamplingRateInput() *f64
```

- *Type:* *f64

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRate"></a>

```go
func SamplingRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesTelemetryPolicyTracingConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicestelemetrypolicy"

googlenetworkservicestelemetrypolicy.NewGoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetSamplingRate"></a>

```go
func ResetSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRateInput">SamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRateInput"></a>

```go
func SamplingRateInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRate"></a>

```go
func SamplingRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---



