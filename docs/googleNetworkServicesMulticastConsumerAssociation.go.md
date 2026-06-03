# `googleNetworkServicesMulticastConsumerAssociation` Submodule <a name="`googleNetworkServicesMulticastConsumerAssociation` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastConsumerAssociation <a name="GoogleNetworkServicesMulticastConsumerAssociation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association google_network_services_multicast_consumer_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

googlenetworkservicesmulticastconsumerassociation.NewGoogleNetworkServicesMulticastConsumerAssociation(scope Construct, id *string, config GoogleNetworkServicesMulticastConsumerAssociationConfig) GoogleNetworkServicesMulticastConsumerAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig">GoogleNetworkServicesMulticastConsumerAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig">GoogleNetworkServicesMulticastConsumerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkServicesMulticastConsumerAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastConsumerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

googlenetworkservicesmulticastconsumerassociation.GoogleNetworkServicesMulticastConsumerAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

googlenetworkservicesmulticastconsumerassociation.GoogleNetworkServicesMulticastConsumerAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

googlenetworkservicesmulticastconsumerassociation.GoogleNetworkServicesMulticastConsumerAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

googlenetworkservicesmulticastconsumerassociation.GoogleNetworkServicesMulticastConsumerAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastConsumerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkServicesMulticastConsumerAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkServicesMulticastConsumerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastConsumerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.placementPolicy">PlacementPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.state">State</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList">GoogleNetworkServicesMulticastConsumerAssociationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference">GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationIdInput">MulticastConsumerAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivationInput">MulticastDomainActivationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationId">MulticastConsumerAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivation">MulticastDomainActivation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PlacementPolicy`<sup>Required</sup> <a name="PlacementPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.placementPolicy"></a>

```go
func PlacementPolicy() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.state"></a>

```go
func State() GoogleNetworkServicesMulticastConsumerAssociationStateList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList">GoogleNetworkServicesMulticastConsumerAssociationStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference">GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MulticastConsumerAssociationIdInput`<sup>Optional</sup> <a name="MulticastConsumerAssociationIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationIdInput"></a>

```go
func MulticastConsumerAssociationIdInput() *string
```

- *Type:* *string

---

##### `MulticastDomainActivationInput`<sup>Optional</sup> <a name="MulticastDomainActivationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivationInput"></a>

```go
func MulticastDomainActivationInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MulticastConsumerAssociationId`<sup>Required</sup> <a name="MulticastConsumerAssociationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationId"></a>

```go
func MulticastConsumerAssociationId() *string
```

- *Type:* *string

---

##### `MulticastDomainActivation`<sup>Required</sup> <a name="MulticastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivation"></a>

```go
func MulticastDomainActivation() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastConsumerAssociationConfig <a name="GoogleNetworkServicesMulticastConsumerAssociationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

&googlenetworkservicesmulticastconsumerassociation.GoogleNetworkServicesMulticastConsumerAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MulticastConsumerAssociationId: *string,
	MulticastDomainActivation: *string,
	Network: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastConsumerAssociationId">MulticastConsumerAssociationId</a></code> | <code>*string</code> | A unique name for the multicast consumer association. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastDomainActivation">MulticastDomainActivation</a></code> | <code>*string</code> | The resource name of the multicast domain activation that is in the same zone as this multicast consumer association. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.network">Network</a></code> | <code>*string</code> | The resource name of the multicast consumer VPC network. Use following format: 'projects/{project}/locations/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.description">Description</a></code> | <code>*string</code> | An optional text description of the multicast consumer association. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#id GoogleNetworkServicesMulticastConsumerAssociation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#project GoogleNetworkServicesMulticastConsumerAssociation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#location GoogleNetworkServicesMulticastConsumerAssociation#location}

---

##### `MulticastConsumerAssociationId`<sup>Required</sup> <a name="MulticastConsumerAssociationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastConsumerAssociationId"></a>

```go
MulticastConsumerAssociationId *string
```

- *Type:* *string

A unique name for the multicast consumer association.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#multicast_consumer_association_id GoogleNetworkServicesMulticastConsumerAssociation#multicast_consumer_association_id}

---

##### `MulticastDomainActivation`<sup>Required</sup> <a name="MulticastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastDomainActivation"></a>

```go
MulticastDomainActivation *string
```

- *Type:* *string

The resource name of the multicast domain activation that is in the same zone as this multicast consumer association.

Use the following format:
// 'projects/* /locations/* /multicastDomainActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#multicast_domain_activation GoogleNetworkServicesMulticastConsumerAssociation#multicast_domain_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The resource name of the multicast consumer VPC network. Use following format: 'projects/{project}/locations/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#network GoogleNetworkServicesMulticastConsumerAssociation#network}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#deletion_policy GoogleNetworkServicesMulticastConsumerAssociation#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional text description of the multicast consumer association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#description GoogleNetworkServicesMulticastConsumerAssociation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#id GoogleNetworkServicesMulticastConsumerAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#labels GoogleNetworkServicesMulticastConsumerAssociation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#project GoogleNetworkServicesMulticastConsumerAssociation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkServicesMulticastConsumerAssociationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#timeouts GoogleNetworkServicesMulticastConsumerAssociation#timeouts}

---

### GoogleNetworkServicesMulticastConsumerAssociationState <a name="GoogleNetworkServicesMulticastConsumerAssociationState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

&googlenetworkservicesmulticastconsumerassociation.GoogleNetworkServicesMulticastConsumerAssociationState {

}
```


### GoogleNetworkServicesMulticastConsumerAssociationTimeouts <a name="GoogleNetworkServicesMulticastConsumerAssociationTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

&googlenetworkservicesmulticastconsumerassociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#create GoogleNetworkServicesMulticastConsumerAssociation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#delete GoogleNetworkServicesMulticastConsumerAssociation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#update GoogleNetworkServicesMulticastConsumerAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#create GoogleNetworkServicesMulticastConsumerAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#delete GoogleNetworkServicesMulticastConsumerAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#update GoogleNetworkServicesMulticastConsumerAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastConsumerAssociationStateList <a name="GoogleNetworkServicesMulticastConsumerAssociationStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

googlenetworkservicesmulticastconsumerassociation.NewGoogleNetworkServicesMulticastConsumerAssociationStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesMulticastConsumerAssociationStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference <a name="GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

googlenetworkservicesmulticastconsumerassociation.NewGoogleNetworkServicesMulticastConsumerAssociationStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState">GoogleNetworkServicesMulticastConsumerAssociationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesMulticastConsumerAssociationState
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState">GoogleNetworkServicesMulticastConsumerAssociationState</a>

---


### GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworkservicesmulticastconsumerassociation"

googlenetworkservicesmulticastconsumerassociation.NewGoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



