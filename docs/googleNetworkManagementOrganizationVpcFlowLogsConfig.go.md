# `googleNetworkManagementOrganizationVpcFlowLogsConfig` Submodule <a name="`googleNetworkManagementOrganizationVpcFlowLogsConfig` Submodule" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkManagementOrganizationVpcFlowLogsConfig <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfig" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config google_network_management_organization_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkmanagementorganizationvpcflowlogsconfig"

googlenetworkmanagementorganizationvpcflowlogsconfig.NewGoogleNetworkManagementOrganizationVpcFlowLogsConfig(scope Construct, id *string, config GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig) GoogleNetworkManagementOrganizationVpcFlowLogsConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig">GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig">GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval">ResetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata">ResetCrossProjectMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr">ResetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling">ResetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields">ResetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `ResetAggregationInterval` <a name="ResetAggregationInterval" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval"></a>

```go
func ResetAggregationInterval()
```

##### `ResetCrossProjectMetadata` <a name="ResetCrossProjectMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata"></a>

```go
func ResetCrossProjectMetadata()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFilterExpr` <a name="ResetFilterExpr" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr"></a>

```go
func ResetFilterExpr()
```

##### `ResetFlowSampling` <a name="ResetFlowSampling" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling"></a>

```go
func ResetFlowSampling()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMetadataFields` <a name="ResetMetadataFields" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields"></a>

```go
func ResetMetadataFields()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkmanagementorganizationvpcflowlogsconfig"

googlenetworkmanagementorganizationvpcflowlogsconfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkmanagementorganizationvpcflowlogsconfig"

googlenetworkmanagementorganizationvpcflowlogsconfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkmanagementorganizationvpcflowlogsconfig"

googlenetworkmanagementorganizationvpcflowlogsconfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkmanagementorganizationvpcflowlogsconfig"

googlenetworkmanagementorganizationvpcflowlogsconfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkManagementOrganizationVpcFlowLogsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkManagementOrganizationVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkManagementOrganizationVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput">AggregationIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput">CrossProjectMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput">FilterExprInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput">FlowSamplingInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput">MetadataFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">VpcFlowLogsConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata">CrossProjectMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr">FilterExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling">FlowSampling</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields">MetadataFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId">VpcFlowLogsConfigId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AggregationIntervalInput`<sup>Optional</sup> <a name="AggregationIntervalInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```go
func AggregationIntervalInput() *string
```

- *Type:* *string

---

##### `CrossProjectMetadataInput`<sup>Optional</sup> <a name="CrossProjectMetadataInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput"></a>

```go
func CrossProjectMetadataInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FilterExprInput`<sup>Optional</sup> <a name="FilterExprInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput"></a>

```go
func FilterExprInput() *string
```

- *Type:* *string

---

##### `FlowSamplingInput`<sup>Optional</sup> <a name="FlowSamplingInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput"></a>

```go
func FlowSamplingInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetadataFieldsInput`<sup>Optional</sup> <a name="MetadataFieldsInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```go
func MetadataFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="VpcFlowLogsConfigIdInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```go
func VpcFlowLogsConfigIdInput() *string
```

- *Type:* *string

---

##### `AggregationInterval`<sup>Required</sup> <a name="AggregationInterval" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval"></a>

```go
func AggregationInterval() *string
```

- *Type:* *string

---

##### `CrossProjectMetadata`<sup>Required</sup> <a name="CrossProjectMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata"></a>

```go
func CrossProjectMetadata() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FilterExpr`<sup>Required</sup> <a name="FilterExpr" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr"></a>

```go
func FilterExpr() *string
```

- *Type:* *string

---

##### `FlowSampling`<sup>Required</sup> <a name="FlowSampling" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling"></a>

```go
func FlowSampling() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields"></a>

```go
func MetadataFields() *[]*string
```

- *Type:* *[]*string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `VpcFlowLogsConfigId`<sup>Required</sup> <a name="VpcFlowLogsConfigId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```go
func VpcFlowLogsConfigId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkmanagementorganizationvpcflowlogsconfig"

&googlenetworkmanagementorganizationvpcflowlogsconfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Organization: *string,
	VpcFlowLogsConfigId: *string,
	AggregationInterval: *string,
	CrossProjectMetadata: *string,
	Description: *string,
	FilterExpr: *string,
	FlowSampling: *f64,
	Id: *string,
	Labels: *map[string]*string,
	Metadata: *string,
	MetadataFields: *[]*string,
	State: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization">Organization</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">VpcFlowLogsConfigId</a></code> | <code>*string</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata">CrossProjectMetadata</a></code> | <code>*string</code> | Determines whether to include cross project annotations in the logs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description">Description</a></code> | <code>*string</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr">FilterExpr</a></code> | <code>*string</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling">FlowSampling</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Resource labels to represent the user-provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata">Metadata</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields">MetadataFields</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state">State</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#location GoogleNetworkManagementOrganizationVpcFlowLogsConfig#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#organization GoogleNetworkManagementOrganizationVpcFlowLogsConfig#organization}

---

##### `VpcFlowLogsConfigId`<sup>Required</sup> <a name="VpcFlowLogsConfigId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```go
VpcFlowLogsConfigId *string
```

- *Type:* *string

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `AggregationInterval`<sup>Optional</sup> <a name="AggregationInterval" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```go
AggregationInterval *string
```

- *Type:* *string

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#aggregation_interval GoogleNetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}

---

##### `CrossProjectMetadata`<sup>Optional</sup> <a name="CrossProjectMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata"></a>

```go
CrossProjectMetadata *string
```

- *Type:* *string

Determines whether to include cross project annotations in the logs.

This field is available only for organization configurations. If not
specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
Possible values:
CROSS_PROJECT_METADATA_ENABLED
CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#cross_project_metadata GoogleNetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#description GoogleNetworkManagementOrganizationVpcFlowLogsConfig#description}

---

##### `FilterExpr`<sup>Optional</sup> <a name="FilterExpr" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr"></a>

```go
FilterExpr *string
```

- *Type:* *string

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#filter_expr GoogleNetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}

---

##### `FlowSampling`<sup>Optional</sup> <a name="FlowSampling" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling"></a>

```go
FlowSampling *f64
```

- *Type:* *f64

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#flow_sampling GoogleNetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Resource labels to represent the user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#labels GoogleNetworkManagementOrganizationVpcFlowLogsConfig#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#metadata GoogleNetworkManagementOrganizationVpcFlowLogsConfig#metadata}

---

##### `MetadataFields`<sup>Optional</sup> <a name="MetadataFields" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields"></a>

```go
MetadataFields *[]*string
```

- *Type:* *[]*string

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#metadata_fields GoogleNetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#state GoogleNetworkManagementOrganizationVpcFlowLogsConfig#state}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#timeouts GoogleNetworkManagementOrganizationVpcFlowLogsConfig#timeouts}

---

### GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkmanagementorganizationvpcflowlogsconfig"

&googlenetworkmanagementorganizationvpcflowlogsconfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#create GoogleNetworkManagementOrganizationVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#delete GoogleNetworkManagementOrganizationVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#update GoogleNetworkManagementOrganizationVpcFlowLogsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#create GoogleNetworkManagementOrganizationVpcFlowLogsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#delete GoogleNetworkManagementOrganizationVpcFlowLogsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#update GoogleNetworkManagementOrganizationVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkmanagementorganizationvpcflowlogsconfig"

googlenetworkmanagementorganizationvpcflowlogsconfig.NewGoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



