# `googleWorkstationsWorkstationCluster` Submodule <a name="`googleWorkstationsWorkstationCluster` Submodule" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkstationsWorkstationCluster <a name="GoogleWorkstationsWorkstationCluster" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster google_workstations_workstation_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationCluster(scope Construct, id *string, config GoogleWorkstationsWorkstationClusterConfig) GoogleWorkstationsWorkstationCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig">GoogleWorkstationsWorkstationClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig">GoogleWorkstationsWorkstationClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putDomainConfig">PutDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putPrivateClusterConfig">PutPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDomainConfig">ResetDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetPrivateClusterConfig">ResetPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl">ResetWorkstationAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetWorkstationLaunchUrl">ResetWorkstationLaunchUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomainConfig` <a name="PutDomainConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putDomainConfig"></a>

```go
func PutDomainConfig(value GoogleWorkstationsWorkstationClusterDomainConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putDomainConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

---

##### `PutPrivateClusterConfig` <a name="PutPrivateClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putPrivateClusterConfig"></a>

```go
func PutPrivateClusterConfig(value GoogleWorkstationsWorkstationClusterPrivateClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putPrivateClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putTimeouts"></a>

```go
func PutTimeouts(value GoogleWorkstationsWorkstationClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDomainConfig` <a name="ResetDomainConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDomainConfig"></a>

```go
func ResetDomainConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPrivateClusterConfig` <a name="ResetPrivateClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetPrivateClusterConfig"></a>

```go
func ResetPrivateClusterConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkstationAuthorizationUrl` <a name="ResetWorkstationAuthorizationUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl"></a>

```go
func ResetWorkstationAuthorizationUrl()
```

##### `ResetWorkstationLaunchUrl` <a name="ResetWorkstationLaunchUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetWorkstationLaunchUrl"></a>

```go
func ResetWorkstationLaunchUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleWorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleWorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleWorkstationsWorkstationCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleWorkstationsWorkstationCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleWorkstationsWorkstationCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList">GoogleWorkstationsWorkstationClusterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.controlPlaneIp">ControlPlaneIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.degraded">Degraded</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfig">DomainConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference">GoogleWorkstationsWorkstationClusterDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfig">PrivateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference">GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference">GoogleWorkstationsWorkstationClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfigInput">DomainConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfigInput">PrivateClusterConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput">WorkstationAuthorizationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationLaunchUrlInput">WorkstationLaunchUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationAuthorizationUrl">WorkstationAuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterId">WorkstationClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationLaunchUrl">WorkstationLaunchUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.conditions"></a>

```go
func Conditions() GoogleWorkstationsWorkstationClusterConditionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList">GoogleWorkstationsWorkstationClusterConditionsList</a>

---

##### `ControlPlaneIp`<sup>Required</sup> <a name="ControlPlaneIp" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.controlPlaneIp"></a>

```go
func ControlPlaneIp() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Degraded`<sup>Required</sup> <a name="Degraded" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.degraded"></a>

```go
func Degraded() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DomainConfig`<sup>Required</sup> <a name="DomainConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfig"></a>

```go
func DomainConfig() GoogleWorkstationsWorkstationClusterDomainConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference">GoogleWorkstationsWorkstationClusterDomainConfigOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateClusterConfig`<sup>Required</sup> <a name="PrivateClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfig"></a>

```go
func PrivateClusterConfig() GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference">GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeouts"></a>

```go
func Timeouts() GoogleWorkstationsWorkstationClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference">GoogleWorkstationsWorkstationClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DomainConfigInput`<sup>Optional</sup> <a name="DomainConfigInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfigInput"></a>

```go
func DomainConfigInput() GoogleWorkstationsWorkstationClusterDomainConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PrivateClusterConfigInput`<sup>Optional</sup> <a name="PrivateClusterConfigInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfigInput"></a>

```go
func PrivateClusterConfigInput() GoogleWorkstationsWorkstationClusterPrivateClusterConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkstationAuthorizationUrlInput`<sup>Optional</sup> <a name="WorkstationAuthorizationUrlInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput"></a>

```go
func WorkstationAuthorizationUrlInput() *string
```

- *Type:* *string

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterIdInput"></a>

```go
func WorkstationClusterIdInput() *string
```

- *Type:* *string

---

##### `WorkstationLaunchUrlInput`<sup>Optional</sup> <a name="WorkstationLaunchUrlInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationLaunchUrlInput"></a>

```go
func WorkstationLaunchUrlInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkstationAuthorizationUrl`<sup>Required</sup> <a name="WorkstationAuthorizationUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationAuthorizationUrl"></a>

```go
func WorkstationAuthorizationUrl() *string
```

- *Type:* *string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterId"></a>

```go
func WorkstationClusterId() *string
```

- *Type:* *string

---

##### `WorkstationLaunchUrl`<sup>Required</sup> <a name="WorkstationLaunchUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationLaunchUrl"></a>

```go
func WorkstationLaunchUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkstationsWorkstationClusterConditions <a name="GoogleWorkstationsWorkstationClusterConditions" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

&googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationClusterConditions {

}
```


### GoogleWorkstationsWorkstationClusterConfig <a name="GoogleWorkstationsWorkstationClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

&googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Network: *string,
	Subnetwork: *string,
	WorkstationClusterId: *string,
	Annotations: *map[string]*string,
	DeletionPolicy: *string,
	DisplayName: *string,
	DomainConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	PrivateClusterConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig,
	Project: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts,
	WorkstationAuthorizationUrl: *string,
	WorkstationLaunchUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.network">Network</a></code> | <code>*string</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>*string</code> | ID to use for the workstation cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.domainConfig">DomainConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a></code> | domain_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#id GoogleWorkstationsWorkstationCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.location">Location</a></code> | <code>*string</code> | The location where the workstation cluster should reside. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.privateClusterConfig">PrivateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a></code> | private_cluster_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#project GoogleWorkstationsWorkstationCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing". |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl">WorkstationAuthorizationUrl</a></code> | <code>*string</code> | Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationLaunchUrl">WorkstationLaunchUrl</a></code> | <code>*string</code> | Specifies the launch URL for workstations in this cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#network GoogleWorkstationsWorkstationCluster#network}

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.

Must be part of the subnetwork specified for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#subnetwork GoogleWorkstationsWorkstationCluster#subnetwork}

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationClusterId"></a>

```go
WorkstationClusterId *string
```

- *Type:* *string

ID to use for the workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#workstation_cluster_id GoogleWorkstationsWorkstationCluster#workstation_cluster_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#annotations GoogleWorkstationsWorkstationCluster#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#deletion_policy GoogleWorkstationsWorkstationCluster#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#display_name GoogleWorkstationsWorkstationCluster#display_name}

---

##### `DomainConfig`<sup>Optional</sup> <a name="DomainConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.domainConfig"></a>

```go
DomainConfig GoogleWorkstationsWorkstationClusterDomainConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#domain_config GoogleWorkstationsWorkstationCluster#domain_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#id GoogleWorkstationsWorkstationCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#labels GoogleWorkstationsWorkstationCluster#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the workstation cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#location GoogleWorkstationsWorkstationCluster#location}

---

##### `PrivateClusterConfig`<sup>Optional</sup> <a name="PrivateClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.privateClusterConfig"></a>

```go
PrivateClusterConfig GoogleWorkstationsWorkstationClusterPrivateClusterConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

private_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#private_cluster_config GoogleWorkstationsWorkstationCluster#private_cluster_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#project GoogleWorkstationsWorkstationCluster#project}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#tags GoogleWorkstationsWorkstationCluster#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.timeouts"></a>

```go
Timeouts GoogleWorkstationsWorkstationClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#timeouts GoogleWorkstationsWorkstationCluster#timeouts}

---

##### `WorkstationAuthorizationUrl`<sup>Optional</sup> <a name="WorkstationAuthorizationUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl"></a>

```go
WorkstationAuthorizationUrl *string
```

- *Type:* *string

Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster.

Redirects to this endpoint will send a base64 encoded 'state' query param containing the target workstation name and original request hostname. The endpoint is responsible for retrieving a token using 'GenerateAccessToken' and redirecting back to the original hostname with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#workstation_authorization_url GoogleWorkstationsWorkstationCluster#workstation_authorization_url}

---

##### `WorkstationLaunchUrl`<sup>Optional</sup> <a name="WorkstationLaunchUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationLaunchUrl"></a>

```go
WorkstationLaunchUrl *string
```

- *Type:* *string

Specifies the launch URL for workstations in this cluster.

Requests sent to unstarted workstations will be redirected to this URL.
Requests redirected to the launch endpoint will be sent with a 'workstation' query parameter containing the full workstation resource. The launch endpoint is responsible for starting the workstation, polling it until it reaches 'STATE_RUNNING', and then issuing a redirect to the workstation's host URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#workstation_launch_url GoogleWorkstationsWorkstationCluster#workstation_launch_url}

---

### GoogleWorkstationsWorkstationClusterDomainConfig <a name="GoogleWorkstationsWorkstationClusterDomainConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

&googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationClusterDomainConfig {
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig.property.domain">Domain</a></code> | <code>*string</code> | Domain used by Workstations for HTTP ingress. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Domain used by Workstations for HTTP ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#domain GoogleWorkstationsWorkstationCluster#domain}

---

### GoogleWorkstationsWorkstationClusterPrivateClusterConfig <a name="GoogleWorkstationsWorkstationClusterPrivateClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

&googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig {
	EnablePrivateEndpoint: interface{},
	AllowedProjects: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>interface{}</code> | Whether Workstations endpoint is private. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects">AllowedProjects</a></code> | <code>*[]*string</code> | Additional project IDs that are allowed to attach to the workstation cluster's service attachment. |

---

##### `EnablePrivateEndpoint`<sup>Required</sup> <a name="EnablePrivateEndpoint" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint"></a>

```go
EnablePrivateEndpoint interface{}
```

- *Type:* interface{}

Whether Workstations endpoint is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#enable_private_endpoint GoogleWorkstationsWorkstationCluster#enable_private_endpoint}

---

##### `AllowedProjects`<sup>Optional</sup> <a name="AllowedProjects" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects"></a>

```go
AllowedProjects *[]*string
```

- *Type:* *[]*string

Additional project IDs that are allowed to attach to the workstation cluster's service attachment.

By default, the workstation cluster's project and the VPC host project (if different) are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#allowed_projects GoogleWorkstationsWorkstationCluster#allowed_projects}

---

### GoogleWorkstationsWorkstationClusterTimeouts <a name="GoogleWorkstationsWorkstationClusterTimeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

&googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#create GoogleWorkstationsWorkstationCluster#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#delete GoogleWorkstationsWorkstationCluster#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#update GoogleWorkstationsWorkstationCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#create GoogleWorkstationsWorkstationCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#delete GoogleWorkstationsWorkstationCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#update GoogleWorkstationsWorkstationCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkstationsWorkstationClusterConditionsList <a name="GoogleWorkstationsWorkstationClusterConditionsList" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationClusterConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleWorkstationsWorkstationClusterConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.get"></a>

```go
func Get(index *f64) GoogleWorkstationsWorkstationClusterConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleWorkstationsWorkstationClusterConditionsOutputReference <a name="GoogleWorkstationsWorkstationClusterConditionsOutputReference" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationClusterConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleWorkstationsWorkstationClusterConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.details">Details</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions">GoogleWorkstationsWorkstationClusterConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleWorkstationsWorkstationClusterConditions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions">GoogleWorkstationsWorkstationClusterConditions</a>

---


### GoogleWorkstationsWorkstationClusterDomainConfigOutputReference <a name="GoogleWorkstationsWorkstationClusterDomainConfigOutputReference" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationClusterDomainConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleWorkstationsWorkstationClusterDomainConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleWorkstationsWorkstationClusterDomainConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

---


### GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference <a name="GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects">ResetAllowedProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedProjects` <a name="ResetAllowedProjects" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects"></a>

```go
func ResetAllowedProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname">ClusterHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri">ServiceAttachmentUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput">AllowedProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput">EnablePrivateEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects">AllowedProjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterHostname`<sup>Required</sup> <a name="ClusterHostname" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname"></a>

```go
func ClusterHostname() *string
```

- *Type:* *string

---

##### `ServiceAttachmentUri`<sup>Required</sup> <a name="ServiceAttachmentUri" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri"></a>

```go
func ServiceAttachmentUri() *string
```

- *Type:* *string

---

##### `AllowedProjectsInput`<sup>Optional</sup> <a name="AllowedProjectsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput"></a>

```go
func AllowedProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnablePrivateEndpointInput`<sup>Optional</sup> <a name="EnablePrivateEndpointInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput"></a>

```go
func EnablePrivateEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedProjects`<sup>Required</sup> <a name="AllowedProjects" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects"></a>

```go
func AllowedProjects() *[]*string
```

- *Type:* *[]*string

---

##### `EnablePrivateEndpoint`<sup>Required</sup> <a name="EnablePrivateEndpoint" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint"></a>

```go
func EnablePrivateEndpoint() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleWorkstationsWorkstationClusterPrivateClusterConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

---


### GoogleWorkstationsWorkstationClusterTimeoutsOutputReference <a name="GoogleWorkstationsWorkstationClusterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleWorkstationsWorkstationClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



