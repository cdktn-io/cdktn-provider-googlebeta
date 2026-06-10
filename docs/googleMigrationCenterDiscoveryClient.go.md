# `googleMigrationCenterDiscoveryClient` Submodule <a name="`googleMigrationCenterDiscoveryClient` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterDiscoveryClient <a name="GoogleMigrationCenterDiscoveryClient" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client google_migration_center_discovery_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

googlemigrationcenterdiscoveryclient.NewGoogleMigrationCenterDiscoveryClient(scope Construct, id *string, config GoogleMigrationCenterDiscoveryClientConfig) GoogleMigrationCenterDiscoveryClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig">GoogleMigrationCenterDiscoveryClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig">GoogleMigrationCenterDiscoveryClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.putTimeouts"></a>

```go
func PutTimeouts(value GoogleMigrationCenterDiscoveryClientTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetExpireTime"></a>

```go
func ResetExpireTime()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

googlemigrationcenterdiscoveryclient.GoogleMigrationCenterDiscoveryClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

googlemigrationcenterdiscoveryclient.GoogleMigrationCenterDiscoveryClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

googlemigrationcenterdiscoveryclient.GoogleMigrationCenterDiscoveryClient_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

googlemigrationcenterdiscoveryclient.GoogleMigrationCenterDiscoveryClient_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleMigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleMigrationCenterDiscoveryClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleMigrationCenterDiscoveryClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterDiscoveryClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList">GoogleMigrationCenterDiscoveryClientErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.heartbeatTime">HeartbeatTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.signalsEndpoint">SignalsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference">GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientIdInput">DiscoveryClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTimeInput">ExpireTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientId">DiscoveryClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.errors"></a>

```go
func Errors() GoogleMigrationCenterDiscoveryClientErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList">GoogleMigrationCenterDiscoveryClientErrorsList</a>

---

##### `HeartbeatTime`<sup>Required</sup> <a name="HeartbeatTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.heartbeatTime"></a>

```go
func HeartbeatTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignalsEndpoint`<sup>Required</sup> <a name="SignalsEndpoint" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.signalsEndpoint"></a>

```go
func SignalsEndpoint() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeouts"></a>

```go
func Timeouts() GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference">GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiscoveryClientIdInput`<sup>Optional</sup> <a name="DiscoveryClientIdInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientIdInput"></a>

```go
func DiscoveryClientIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTimeInput"></a>

```go
func ExpireTimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiscoveryClientId`<sup>Required</sup> <a name="DiscoveryClientId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientId"></a>

```go
func DiscoveryClientId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterDiscoveryClientConfig <a name="GoogleMigrationCenterDiscoveryClientConfig" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

&googlemigrationcenterdiscoveryclient.GoogleMigrationCenterDiscoveryClientConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DiscoveryClientId: *string,
	Location: *string,
	ServiceAccount: *string,
	Source: *string,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	ExpireTime: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.discoveryClientId">DiscoveryClientId</a></code> | <code>*string</code> | User specified ID for the discovery client. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Service account used by the discovery client for various operation. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.source">Source</a></code> | <code>*string</code> | Full name of the source object associated with this discovery client. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.description">Description</a></code> | <code>*string</code> | Free text description. Maximum length is 1000 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Free text display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.expireTime">ExpireTime</a></code> | <code>*string</code> | Client expiration time in UTC. If specified, the backend will not accept new frames after this time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#id GoogleMigrationCenterDiscoveryClient#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#project GoogleMigrationCenterDiscoveryClient#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Input only. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiscoveryClientId`<sup>Required</sup> <a name="DiscoveryClientId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.discoveryClientId"></a>

```go
DiscoveryClientId *string
```

- *Type:* *string

User specified ID for the discovery client.

It will become the last
component of the discovery client name. The ID must be unique within the
project, is restricted to lower-cased letters and has a maximum length of
63 characters. The ID must match the regular expression:
'[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#discovery_client_id GoogleMigrationCenterDiscoveryClient#discovery_client_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#location GoogleMigrationCenterDiscoveryClient#location}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Service account used by the discovery client for various operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#service_account GoogleMigrationCenterDiscoveryClient#service_account}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Full name of the source object associated with this discovery client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#source GoogleMigrationCenterDiscoveryClient#source}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#deletion_policy GoogleMigrationCenterDiscoveryClient#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Free text description. Maximum length is 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#description GoogleMigrationCenterDiscoveryClient#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Free text display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#display_name GoogleMigrationCenterDiscoveryClient#display_name}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.expireTime"></a>

```go
ExpireTime *string
```

- *Type:* *string

Client expiration time in UTC. If specified, the backend will not accept new frames after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#expire_time GoogleMigrationCenterDiscoveryClient#expire_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#id GoogleMigrationCenterDiscoveryClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#labels GoogleMigrationCenterDiscoveryClient#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#project GoogleMigrationCenterDiscoveryClient#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.timeouts"></a>

```go
Timeouts GoogleMigrationCenterDiscoveryClientTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#timeouts GoogleMigrationCenterDiscoveryClient#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Input only.

Client time-to-live. If specified, the backend will not accept new
frames after this time.
This field is input only. The derived expiration time is provided as
output through the 'expire_time' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#ttl GoogleMigrationCenterDiscoveryClient#ttl}

---

### GoogleMigrationCenterDiscoveryClientErrors <a name="GoogleMigrationCenterDiscoveryClientErrors" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

&googlemigrationcenterdiscoveryclient.GoogleMigrationCenterDiscoveryClientErrors {

}
```


### GoogleMigrationCenterDiscoveryClientErrorsDetails <a name="GoogleMigrationCenterDiscoveryClientErrorsDetails" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

&googlemigrationcenterdiscoveryclient.GoogleMigrationCenterDiscoveryClientErrorsDetails {

}
```


### GoogleMigrationCenterDiscoveryClientTimeouts <a name="GoogleMigrationCenterDiscoveryClientTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

&googlemigrationcenterdiscoveryclient.GoogleMigrationCenterDiscoveryClientTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#create GoogleMigrationCenterDiscoveryClient#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#delete GoogleMigrationCenterDiscoveryClient#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#update GoogleMigrationCenterDiscoveryClient#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#create GoogleMigrationCenterDiscoveryClient#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#delete GoogleMigrationCenterDiscoveryClient#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_discovery_client#update GoogleMigrationCenterDiscoveryClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterDiscoveryClientErrorsDetailsList <a name="GoogleMigrationCenterDiscoveryClientErrorsDetailsList" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

googlemigrationcenterdiscoveryclient.NewGoogleMigrationCenterDiscoveryClientErrorsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMigrationCenterDiscoveryClientErrorsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.get"></a>

```go
func Get(index *f64) GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference <a name="GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

googlemigrationcenterdiscoveryclient.NewGoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails">GoogleMigrationCenterDiscoveryClientErrorsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMigrationCenterDiscoveryClientErrorsDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails">GoogleMigrationCenterDiscoveryClientErrorsDetails</a>

---


### GoogleMigrationCenterDiscoveryClientErrorsList <a name="GoogleMigrationCenterDiscoveryClientErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

googlemigrationcenterdiscoveryclient.NewGoogleMigrationCenterDiscoveryClientErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMigrationCenterDiscoveryClientErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.get"></a>

```go
func Get(index *f64) GoogleMigrationCenterDiscoveryClientErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleMigrationCenterDiscoveryClientErrorsOutputReference <a name="GoogleMigrationCenterDiscoveryClientErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

googlemigrationcenterdiscoveryclient.NewGoogleMigrationCenterDiscoveryClientErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMigrationCenterDiscoveryClientErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList">GoogleMigrationCenterDiscoveryClientErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors">GoogleMigrationCenterDiscoveryClientErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.details"></a>

```go
func Details() GoogleMigrationCenterDiscoveryClientErrorsDetailsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList">GoogleMigrationCenterDiscoveryClientErrorsDetailsList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMigrationCenterDiscoveryClientErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors">GoogleMigrationCenterDiscoveryClientErrors</a>

---


### GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference <a name="GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlemigrationcenterdiscoveryclient"

googlemigrationcenterdiscoveryclient.NewGoogleMigrationCenterDiscoveryClientTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



