# `googleNetworkServicesMulticastDomainActivation` Submodule <a name="`googleNetworkServicesMulticastDomainActivation` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastDomainActivation <a name="GoogleNetworkServicesMulticastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation google_network_services_multicast_domain_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainActivation(Construct Scope, string Id, GoogleNetworkServicesMulticastDomainActivationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig">GoogleNetworkServicesMulticastDomainActivationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig">GoogleNetworkServicesMulticastDomainActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec">PutTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy">ResetDisablePlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTrafficSpec">ResetTrafficSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesMulticastDomainActivationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `PutTrafficSpec` <a name="PutTrafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec"></a>

```csharp
private void PutTrafficSpec(GoogleNetworkServicesMulticastDomainActivationTrafficSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisablePlacementPolicy` <a name="ResetDisablePlacementPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy"></a>

```csharp
private void ResetDisablePlacementPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrafficSpec` <a name="ResetTrafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTrafficSpec"></a>

```csharp
private void ResetTrafficSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastDomainActivation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastDomainActivation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastDomainActivation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastDomainActivation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesMulticastDomainActivation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesMulticastDomainActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastDomainActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.adminNetwork">AdminNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.state">State</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList">GoogleNetworkServicesMulticastDomainActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpec">TrafficSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference">GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput">DisablePlacementPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput">MulticastDomainActivationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainInput">MulticastDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpecInput">TrafficSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicy">DisablePlacementPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomain">MulticastDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationId">MulticastDomainActivationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdminNetwork`<sup>Required</sup> <a name="AdminNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.adminNetwork"></a>

```csharp
public string AdminNetwork { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.state"></a>

```csharp
public GoogleNetworkServicesMulticastDomainActivationStateList State { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList">GoogleNetworkServicesMulticastDomainActivationStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeouts"></a>

```csharp
public GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference</a>

---

##### `TrafficSpec`<sup>Required</sup> <a name="TrafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpec"></a>

```csharp
public GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference TrafficSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference">GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisablePlacementPolicyInput`<sup>Optional</sup> <a name="DisablePlacementPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput"></a>

```csharp
public bool|IResolvable DisablePlacementPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MulticastDomainActivationIdInput`<sup>Optional</sup> <a name="MulticastDomainActivationIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput"></a>

```csharp
public string MulticastDomainActivationIdInput { get; }
```

- *Type:* string

---

##### `MulticastDomainInput`<sup>Optional</sup> <a name="MulticastDomainInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainInput"></a>

```csharp
public string MulticastDomainInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesMulticastDomainActivationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `TrafficSpecInput`<sup>Optional</sup> <a name="TrafficSpecInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpecInput"></a>

```csharp
public GoogleNetworkServicesMulticastDomainActivationTrafficSpec TrafficSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisablePlacementPolicy`<sup>Required</sup> <a name="DisablePlacementPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicy"></a>

```csharp
public bool|IResolvable DisablePlacementPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MulticastDomain`<sup>Required</sup> <a name="MulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomain"></a>

```csharp
public string MulticastDomain { get; }
```

- *Type:* string

---

##### `MulticastDomainActivationId`<sup>Required</sup> <a name="MulticastDomainActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationId"></a>

```csharp
public string MulticastDomainActivationId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastDomainActivationConfig <a name="GoogleNetworkServicesMulticastDomainActivationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainActivationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string MulticastDomain,
    string MulticastDomainActivationId,
    string DeletionPolicy = null,
    string Description = null,
    bool|IResolvable DisablePlacementPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkServicesMulticastDomainActivationTimeouts Timeouts = null,
    GoogleNetworkServicesMulticastDomainActivationTrafficSpec TrafficSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomain">MulticastDomain</a></code> | <code>string</code> | The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId">MulticastDomainActivationId</a></code> | <code>string</code> | A unique name for the multicast domain activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.description">Description</a></code> | <code>string</code> | An optional text description of the multicast domain activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy">DisablePlacementPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Option to allow disabling placement policy for multicast infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#id GoogleNetworkServicesMulticastDomainActivation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#project GoogleNetworkServicesMulticastDomainActivation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.trafficSpec">TrafficSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a></code> | traffic_spec block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#location GoogleNetworkServicesMulticastDomainActivation#location}

---

##### `MulticastDomain`<sup>Required</sup> <a name="MulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomain"></a>

```csharp
public string MulticastDomain { get; set; }
```

- *Type:* string

The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#multicast_domain GoogleNetworkServicesMulticastDomainActivation#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `MulticastDomainActivationId`<sup>Required</sup> <a name="MulticastDomainActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId"></a>

```csharp
public string MulticastDomainActivationId { get; set; }
```

- *Type:* string

A unique name for the multicast domain activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#multicast_domain_activation_id GoogleNetworkServicesMulticastDomainActivation#multicast_domain_activation_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#deletion_policy GoogleNetworkServicesMulticastDomainActivation#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional text description of the multicast domain activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#description GoogleNetworkServicesMulticastDomainActivation#description}

---

##### `DisablePlacementPolicy`<sup>Optional</sup> <a name="DisablePlacementPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy"></a>

```csharp
public bool|IResolvable DisablePlacementPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Option to allow disabling placement policy for multicast infrastructure.

Only applicable if the activation is for a domain associating with a
multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#disable_placement_policy GoogleNetworkServicesMulticastDomainActivation#disable_placement_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#id GoogleNetworkServicesMulticastDomainActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#labels GoogleNetworkServicesMulticastDomainActivation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#project GoogleNetworkServicesMulticastDomainActivation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesMulticastDomainActivationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#timeouts GoogleNetworkServicesMulticastDomainActivation#timeouts}

---

##### `TrafficSpec`<sup>Optional</sup> <a name="TrafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.trafficSpec"></a>

```csharp
public GoogleNetworkServicesMulticastDomainActivationTrafficSpec TrafficSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

traffic_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#traffic_spec GoogleNetworkServicesMulticastDomainActivation#traffic_spec}

---

### GoogleNetworkServicesMulticastDomainActivationState <a name="GoogleNetworkServicesMulticastDomainActivationState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainActivationState {

};
```


### GoogleNetworkServicesMulticastDomainActivationTimeouts <a name="GoogleNetworkServicesMulticastDomainActivationTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainActivationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#create GoogleNetworkServicesMulticastDomainActivation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#delete GoogleNetworkServicesMulticastDomainActivation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#update GoogleNetworkServicesMulticastDomainActivation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#create GoogleNetworkServicesMulticastDomainActivation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#delete GoogleNetworkServicesMulticastDomainActivation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#update GoogleNetworkServicesMulticastDomainActivation#update}.

---

### GoogleNetworkServicesMulticastDomainActivationTrafficSpec <a name="GoogleNetworkServicesMulticastDomainActivationTrafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainActivationTrafficSpec {
    string AggrEgressPps = null,
    string AggrIngressPps = null,
    double AvgPacketSize = null,
    string MaxPerGroupIngressPps = null,
    string MaxPerGroupSubscribers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps">AggrEgressPps</a></code> | <code>string</code> | Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps">AggrIngressPps</a></code> | <code>string</code> | Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize">AvgPacketSize</a></code> | <code>double</code> | Average packet size (Default to 512 bytes). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps">MaxPerGroupIngressPps</a></code> | <code>string</code> | Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers">MaxPerGroupSubscribers</a></code> | <code>string</code> | Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps). |

---

##### `AggrEgressPps`<sup>Optional</sup> <a name="AggrEgressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps"></a>

```csharp
public string AggrEgressPps { get; set; }
```

- *Type:* string

Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#aggr_egress_pps GoogleNetworkServicesMulticastDomainActivation#aggr_egress_pps}

---

##### `AggrIngressPps`<sup>Optional</sup> <a name="AggrIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps"></a>

```csharp
public string AggrIngressPps { get; set; }
```

- *Type:* string

Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#aggr_ingress_pps GoogleNetworkServicesMulticastDomainActivation#aggr_ingress_pps}

---

##### `AvgPacketSize`<sup>Optional</sup> <a name="AvgPacketSize" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize"></a>

```csharp
public double AvgPacketSize { get; set; }
```

- *Type:* double

Average packet size (Default to 512 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#avg_packet_size GoogleNetworkServicesMulticastDomainActivation#avg_packet_size}

---

##### `MaxPerGroupIngressPps`<sup>Optional</sup> <a name="MaxPerGroupIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps"></a>

```csharp
public string MaxPerGroupIngressPps { get; set; }
```

- *Type:* string

Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#max_per_group_ingress_pps GoogleNetworkServicesMulticastDomainActivation#max_per_group_ingress_pps}

---

##### `MaxPerGroupSubscribers`<sup>Optional</sup> <a name="MaxPerGroupSubscribers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers"></a>

```csharp
public string MaxPerGroupSubscribers { get; set; }
```

- *Type:* string

Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#max_per_group_subscribers GoogleNetworkServicesMulticastDomainActivation#max_per_group_subscribers}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastDomainActivationStateList <a name="GoogleNetworkServicesMulticastDomainActivationStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainActivationStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.get"></a>

```csharp
private GoogleNetworkServicesMulticastDomainActivationStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkServicesMulticastDomainActivationStateOutputReference <a name="GoogleNetworkServicesMulticastDomainActivationStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainActivationStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState">GoogleNetworkServicesMulticastDomainActivationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesMulticastDomainActivationState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState">GoogleNetworkServicesMulticastDomainActivationState</a>

---


### GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesMulticastDomainActivationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

---


### GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference <a name="GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps">ResetAggrEgressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps">ResetAggrIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize">ResetAvgPacketSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps">ResetMaxPerGroupIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers">ResetMaxPerGroupSubscribers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggrEgressPps` <a name="ResetAggrEgressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps"></a>

```csharp
private void ResetAggrEgressPps()
```

##### `ResetAggrIngressPps` <a name="ResetAggrIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps"></a>

```csharp
private void ResetAggrIngressPps()
```

##### `ResetAvgPacketSize` <a name="ResetAvgPacketSize" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize"></a>

```csharp
private void ResetAvgPacketSize()
```

##### `ResetMaxPerGroupIngressPps` <a name="ResetMaxPerGroupIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps"></a>

```csharp
private void ResetMaxPerGroupIngressPps()
```

##### `ResetMaxPerGroupSubscribers` <a name="ResetMaxPerGroupSubscribers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers"></a>

```csharp
private void ResetMaxPerGroupSubscribers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput">AggrEgressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput">AggrIngressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput">AvgPacketSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput">MaxPerGroupIngressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput">MaxPerGroupSubscribersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps">AggrEgressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps">AggrIngressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize">AvgPacketSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps">MaxPerGroupIngressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers">MaxPerGroupSubscribers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggrEgressPpsInput`<sup>Optional</sup> <a name="AggrEgressPpsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput"></a>

```csharp
public string AggrEgressPpsInput { get; }
```

- *Type:* string

---

##### `AggrIngressPpsInput`<sup>Optional</sup> <a name="AggrIngressPpsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput"></a>

```csharp
public string AggrIngressPpsInput { get; }
```

- *Type:* string

---

##### `AvgPacketSizeInput`<sup>Optional</sup> <a name="AvgPacketSizeInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput"></a>

```csharp
public double AvgPacketSizeInput { get; }
```

- *Type:* double

---

##### `MaxPerGroupIngressPpsInput`<sup>Optional</sup> <a name="MaxPerGroupIngressPpsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput"></a>

```csharp
public string MaxPerGroupIngressPpsInput { get; }
```

- *Type:* string

---

##### `MaxPerGroupSubscribersInput`<sup>Optional</sup> <a name="MaxPerGroupSubscribersInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput"></a>

```csharp
public string MaxPerGroupSubscribersInput { get; }
```

- *Type:* string

---

##### `AggrEgressPps`<sup>Required</sup> <a name="AggrEgressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps"></a>

```csharp
public string AggrEgressPps { get; }
```

- *Type:* string

---

##### `AggrIngressPps`<sup>Required</sup> <a name="AggrIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps"></a>

```csharp
public string AggrIngressPps { get; }
```

- *Type:* string

---

##### `AvgPacketSize`<sup>Required</sup> <a name="AvgPacketSize" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize"></a>

```csharp
public double AvgPacketSize { get; }
```

- *Type:* double

---

##### `MaxPerGroupIngressPps`<sup>Required</sup> <a name="MaxPerGroupIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps"></a>

```csharp
public string MaxPerGroupIngressPps { get; }
```

- *Type:* string

---

##### `MaxPerGroupSubscribers`<sup>Required</sup> <a name="MaxPerGroupSubscribers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers"></a>

```csharp
public string MaxPerGroupSubscribers { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesMulticastDomainActivationTrafficSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

---



