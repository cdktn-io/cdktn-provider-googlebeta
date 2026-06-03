# `googleNetworkServicesMulticastConsumerAssociation` Submodule <a name="`googleNetworkServicesMulticastConsumerAssociation` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastConsumerAssociation <a name="GoogleNetworkServicesMulticastConsumerAssociation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association google_network_services_multicast_consumer_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastConsumerAssociation(Construct Scope, string Id, GoogleNetworkServicesMulticastConsumerAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig">GoogleNetworkServicesMulticastConsumerAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesMulticastConsumerAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastConsumerAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastConsumerAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastConsumerAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastConsumerAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastConsumerAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesMulticastConsumerAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesMulticastConsumerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastConsumerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.placementPolicy">PlacementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.state">State</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList">GoogleNetworkServicesMulticastConsumerAssociationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference">GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationIdInput">MulticastConsumerAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivationInput">MulticastDomainActivationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationId">MulticastConsumerAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivation">MulticastDomainActivation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlacementPolicy`<sup>Required</sup> <a name="PlacementPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.placementPolicy"></a>

```csharp
public string PlacementPolicy { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.state"></a>

```csharp
public GoogleNetworkServicesMulticastConsumerAssociationStateList State { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList">GoogleNetworkServicesMulticastConsumerAssociationStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeouts"></a>

```csharp
public GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference">GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MulticastConsumerAssociationIdInput`<sup>Optional</sup> <a name="MulticastConsumerAssociationIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationIdInput"></a>

```csharp
public string MulticastConsumerAssociationIdInput { get; }
```

- *Type:* string

---

##### `MulticastDomainActivationInput`<sup>Optional</sup> <a name="MulticastDomainActivationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivationInput"></a>

```csharp
public string MulticastDomainActivationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesMulticastConsumerAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MulticastConsumerAssociationId`<sup>Required</sup> <a name="MulticastConsumerAssociationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationId"></a>

```csharp
public string MulticastConsumerAssociationId { get; }
```

- *Type:* string

---

##### `MulticastDomainActivation`<sup>Required</sup> <a name="MulticastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivation"></a>

```csharp
public string MulticastDomainActivation { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastConsumerAssociationConfig <a name="GoogleNetworkServicesMulticastConsumerAssociationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastConsumerAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string MulticastConsumerAssociationId,
    string MulticastDomainActivation,
    string Network,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkServicesMulticastConsumerAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastConsumerAssociationId">MulticastConsumerAssociationId</a></code> | <code>string</code> | A unique name for the multicast consumer association. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastDomainActivation">MulticastDomainActivation</a></code> | <code>string</code> | The resource name of the multicast domain activation that is in the same zone as this multicast consumer association. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.network">Network</a></code> | <code>string</code> | The resource name of the multicast consumer VPC network. Use following format: 'projects/{project}/locations/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.description">Description</a></code> | <code>string</code> | An optional text description of the multicast consumer association. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#id GoogleNetworkServicesMulticastConsumerAssociation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#project GoogleNetworkServicesMulticastConsumerAssociation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#location GoogleNetworkServicesMulticastConsumerAssociation#location}

---

##### `MulticastConsumerAssociationId`<sup>Required</sup> <a name="MulticastConsumerAssociationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastConsumerAssociationId"></a>

```csharp
public string MulticastConsumerAssociationId { get; set; }
```

- *Type:* string

A unique name for the multicast consumer association.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#multicast_consumer_association_id GoogleNetworkServicesMulticastConsumerAssociation#multicast_consumer_association_id}

---

##### `MulticastDomainActivation`<sup>Required</sup> <a name="MulticastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastDomainActivation"></a>

```csharp
public string MulticastDomainActivation { get; set; }
```

- *Type:* string

The resource name of the multicast domain activation that is in the same zone as this multicast consumer association.

Use the following format:
// 'projects/* /locations/* /multicastDomainActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#multicast_domain_activation GoogleNetworkServicesMulticastConsumerAssociation#multicast_domain_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The resource name of the multicast consumer VPC network. Use following format: 'projects/{project}/locations/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#network GoogleNetworkServicesMulticastConsumerAssociation#network}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

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

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional text description of the multicast consumer association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#description GoogleNetworkServicesMulticastConsumerAssociation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#id GoogleNetworkServicesMulticastConsumerAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#labels GoogleNetworkServicesMulticastConsumerAssociation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#project GoogleNetworkServicesMulticastConsumerAssociation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesMulticastConsumerAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#timeouts GoogleNetworkServicesMulticastConsumerAssociation#timeouts}

---

### GoogleNetworkServicesMulticastConsumerAssociationState <a name="GoogleNetworkServicesMulticastConsumerAssociationState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastConsumerAssociationState {

};
```


### GoogleNetworkServicesMulticastConsumerAssociationTimeouts <a name="GoogleNetworkServicesMulticastConsumerAssociationTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastConsumerAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#create GoogleNetworkServicesMulticastConsumerAssociation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#delete GoogleNetworkServicesMulticastConsumerAssociation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#update GoogleNetworkServicesMulticastConsumerAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#create GoogleNetworkServicesMulticastConsumerAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#delete GoogleNetworkServicesMulticastConsumerAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_consumer_association#update GoogleNetworkServicesMulticastConsumerAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastConsumerAssociationStateList <a name="GoogleNetworkServicesMulticastConsumerAssociationStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastConsumerAssociationStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.get"></a>

```csharp
private GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference <a name="GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState">GoogleNetworkServicesMulticastConsumerAssociationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesMulticastConsumerAssociationState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState">GoogleNetworkServicesMulticastConsumerAssociationState</a>

---


### GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesMulticastConsumerAssociationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a>

---



