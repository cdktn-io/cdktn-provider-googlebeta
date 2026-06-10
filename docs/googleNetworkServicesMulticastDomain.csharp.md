# `googleNetworkServicesMulticastDomain` Submodule <a name="`googleNetworkServicesMulticastDomain` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastDomain <a name="GoogleNetworkServicesMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain google_network_services_multicast_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomain(Construct Scope, string Id, GoogleNetworkServicesMulticastDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig">GoogleNetworkServicesMulticastDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig">GoogleNetworkServicesMulticastDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putConnectionConfig">PutConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putUllMulticastDomain">PutUllMulticastDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetMulticastDomainGroup">ResetMulticastDomainGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetUllMulticastDomain">ResetUllMulticastDomain</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionConfig` <a name="PutConnectionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putConnectionConfig"></a>

```csharp
private void PutConnectionConfig(GoogleNetworkServicesMulticastDomainConnectionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putConnectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesMulticastDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a>

---

##### `PutUllMulticastDomain` <a name="PutUllMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putUllMulticastDomain"></a>

```csharp
private void PutUllMulticastDomain(GoogleNetworkServicesMulticastDomainUllMulticastDomain Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putUllMulticastDomain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMulticastDomainGroup` <a name="ResetMulticastDomainGroup" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetMulticastDomainGroup"></a>

```csharp
private void ResetMulticastDomainGroup()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUllMulticastDomain` <a name="ResetUllMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetUllMulticastDomain"></a>

```csharp
private void ResetUllMulticastDomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesMulticastDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesMulticastDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connectionConfig">ConnectionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference">GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.state">State</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList">GoogleNetworkServicesMulticastDomainStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.ullMulticastDomain">UllMulticastDomain</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference">GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.adminNetworkInput">AdminNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connectionConfigInput">ConnectionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainGroupInput">MulticastDomainGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainIdInput">MulticastDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.ullMulticastDomainInput">UllMulticastDomainInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.adminNetwork">AdminNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainGroup">MulticastDomainGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainId">MulticastDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionConfig`<sup>Required</sup> <a name="ConnectionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connectionConfig"></a>

```csharp
public GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference ConnectionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference">GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.state"></a>

```csharp
public GoogleNetworkServicesMulticastDomainStateList State { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList">GoogleNetworkServicesMulticastDomainStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.timeouts"></a>

```csharp
public GoogleNetworkServicesMulticastDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainTimeoutsOutputReference</a>

---

##### `UllMulticastDomain`<sup>Required</sup> <a name="UllMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.ullMulticastDomain"></a>

```csharp
public GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference UllMulticastDomain { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference">GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AdminNetworkInput`<sup>Optional</sup> <a name="AdminNetworkInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.adminNetworkInput"></a>

```csharp
public string AdminNetworkInput { get; }
```

- *Type:* string

---

##### `ConnectionConfigInput`<sup>Optional</sup> <a name="ConnectionConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connectionConfigInput"></a>

```csharp
public GoogleNetworkServicesMulticastDomainConnectionConfig ConnectionConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MulticastDomainGroupInput`<sup>Optional</sup> <a name="MulticastDomainGroupInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainGroupInput"></a>

```csharp
public string MulticastDomainGroupInput { get; }
```

- *Type:* string

---

##### `MulticastDomainIdInput`<sup>Optional</sup> <a name="MulticastDomainIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainIdInput"></a>

```csharp
public string MulticastDomainIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesMulticastDomainTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a>

---

##### `UllMulticastDomainInput`<sup>Optional</sup> <a name="UllMulticastDomainInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.ullMulticastDomainInput"></a>

```csharp
public GoogleNetworkServicesMulticastDomainUllMulticastDomain UllMulticastDomainInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a>

---

##### `AdminNetwork`<sup>Required</sup> <a name="AdminNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.adminNetwork"></a>

```csharp
public string AdminNetwork { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MulticastDomainGroup`<sup>Required</sup> <a name="MulticastDomainGroup" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainGroup"></a>

```csharp
public string MulticastDomainGroup { get; }
```

- *Type:* string

---

##### `MulticastDomainId`<sup>Required</sup> <a name="MulticastDomainId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainId"></a>

```csharp
public string MulticastDomainId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastDomainConfig <a name="GoogleNetworkServicesMulticastDomainConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AdminNetwork,
    GoogleNetworkServicesMulticastDomainConnectionConfig ConnectionConfig,
    string Location,
    string MulticastDomainId,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string MulticastDomainGroup = null,
    string Project = null,
    GoogleNetworkServicesMulticastDomainTimeouts Timeouts = null,
    GoogleNetworkServicesMulticastDomainUllMulticastDomain UllMulticastDomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.adminNetwork">AdminNetwork</a></code> | <code>string</code> | The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.connectionConfig">ConnectionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a></code> | connection_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.multicastDomainId">MulticastDomainId</a></code> | <code>string</code> | A unique name for the multicast domain. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.description">Description</a></code> | <code>string</code> | An optional text description of the multicast domain. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#id GoogleNetworkServicesMulticastDomain#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.multicastDomainGroup">MulticastDomainGroup</a></code> | <code>string</code> | The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#project GoogleNetworkServicesMulticastDomain#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.ullMulticastDomain">UllMulticastDomain</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a></code> | ull_multicast_domain block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdminNetwork`<sup>Required</sup> <a name="AdminNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.adminNetwork"></a>

```csharp
public string AdminNetwork { get; set; }
```

- *Type:* string

The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#admin_network GoogleNetworkServicesMulticastDomain#admin_network}

---

##### `ConnectionConfig`<sup>Required</sup> <a name="ConnectionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.connectionConfig"></a>

```csharp
public GoogleNetworkServicesMulticastDomainConnectionConfig ConnectionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a>

connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#connection_config GoogleNetworkServicesMulticastDomain#connection_config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#location GoogleNetworkServicesMulticastDomain#location}

---

##### `MulticastDomainId`<sup>Required</sup> <a name="MulticastDomainId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.multicastDomainId"></a>

```csharp
public string MulticastDomainId { get; set; }
```

- *Type:* string

A unique name for the multicast domain.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#multicast_domain_id GoogleNetworkServicesMulticastDomain#multicast_domain_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#deletion_policy GoogleNetworkServicesMulticastDomain#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional text description of the multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#description GoogleNetworkServicesMulticastDomain#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#id GoogleNetworkServicesMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#labels GoogleNetworkServicesMulticastDomain#labels}

---

##### `MulticastDomainGroup`<sup>Optional</sup> <a name="MulticastDomainGroup" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.multicastDomainGroup"></a>

```csharp
public string MulticastDomainGroup { get; set; }
```

- *Type:* string

The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#multicast_domain_group GoogleNetworkServicesMulticastDomain#multicast_domain_group}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#project GoogleNetworkServicesMulticastDomain#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesMulticastDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#timeouts GoogleNetworkServicesMulticastDomain#timeouts}

---

##### `UllMulticastDomain`<sup>Optional</sup> <a name="UllMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.ullMulticastDomain"></a>

```csharp
public GoogleNetworkServicesMulticastDomainUllMulticastDomain UllMulticastDomain { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a>

ull_multicast_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#ull_multicast_domain GoogleNetworkServicesMulticastDomain#ull_multicast_domain}

---

### GoogleNetworkServicesMulticastDomainConnectionConfig <a name="GoogleNetworkServicesMulticastDomainConnectionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainConnectionConfig {
    string ConnectionType,
    string NccHub = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig.property.connectionType">ConnectionType</a></code> | <code>string</code> | The VPC connection type. Possible values: NCC SAME_VPC. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig.property.nccHub">NccHub</a></code> | <code>string</code> | The resource name of the [NCC](https://cloud.google.com/network-connectivity-center) hub. Use the following format: 'projects/{project}/locations/global/hubs/{hub}'. |

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

The VPC connection type. Possible values: NCC SAME_VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#connection_type GoogleNetworkServicesMulticastDomain#connection_type}

---

##### `NccHub`<sup>Optional</sup> <a name="NccHub" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig.property.nccHub"></a>

```csharp
public string NccHub { get; set; }
```

- *Type:* string

The resource name of the [NCC](https://cloud.google.com/network-connectivity-center) hub. Use the following format: 'projects/{project}/locations/global/hubs/{hub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#ncc_hub GoogleNetworkServicesMulticastDomain#ncc_hub}

---

### GoogleNetworkServicesMulticastDomainState <a name="GoogleNetworkServicesMulticastDomainState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainState {

};
```


### GoogleNetworkServicesMulticastDomainTimeouts <a name="GoogleNetworkServicesMulticastDomainTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#create GoogleNetworkServicesMulticastDomain#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#delete GoogleNetworkServicesMulticastDomain#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#update GoogleNetworkServicesMulticastDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#create GoogleNetworkServicesMulticastDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#delete GoogleNetworkServicesMulticastDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#update GoogleNetworkServicesMulticastDomain#update}.

---

### GoogleNetworkServicesMulticastDomainUllMulticastDomain <a name="GoogleNetworkServicesMulticastDomainUllMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainUllMulticastDomain {
    string PreconfiguredUllDomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain.property.preconfiguredUllDomain">PreconfiguredUllDomain</a></code> | <code>string</code> | The preconfigured Ultra-Low-Latency domain name. |

---

##### `PreconfiguredUllDomain`<sup>Optional</sup> <a name="PreconfiguredUllDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain.property.preconfiguredUllDomain"></a>

```csharp
public string PreconfiguredUllDomain { get; set; }
```

- *Type:* string

The preconfigured Ultra-Low-Latency domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain#preconfigured_ull_domain GoogleNetworkServicesMulticastDomain#preconfigured_ull_domain}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference <a name="GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.resetNccHub">ResetNccHub</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNccHub` <a name="ResetNccHub" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.resetNccHub"></a>

```csharp
private void ResetNccHub()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHubInput">NccHubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHub">NccHub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `NccHubInput`<sup>Optional</sup> <a name="NccHubInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHubInput"></a>

```csharp
public string NccHubInput { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `NccHub`<sup>Required</sup> <a name="NccHub" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHub"></a>

```csharp
public string NccHub { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesMulticastDomainConnectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a>

---


### GoogleNetworkServicesMulticastDomainStateList <a name="GoogleNetworkServicesMulticastDomainStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.get"></a>

```csharp
private GoogleNetworkServicesMulticastDomainStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkServicesMulticastDomainStateOutputReference <a name="GoogleNetworkServicesMulticastDomainStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainState">GoogleNetworkServicesMulticastDomainState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesMulticastDomainState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainState">GoogleNetworkServicesMulticastDomainState</a>

---


### GoogleNetworkServicesMulticastDomainTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastDomainTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesMulticastDomainTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a>

---


### GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference <a name="GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.resetPreconfiguredUllDomain">ResetPreconfiguredUllDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreconfiguredUllDomain` <a name="ResetPreconfiguredUllDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.resetPreconfiguredUllDomain"></a>

```csharp
private void ResetPreconfiguredUllDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomainInput">PreconfiguredUllDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomain">PreconfiguredUllDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreconfiguredUllDomainInput`<sup>Optional</sup> <a name="PreconfiguredUllDomainInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomainInput"></a>

```csharp
public string PreconfiguredUllDomainInput { get; }
```

- *Type:* string

---

##### `PreconfiguredUllDomain`<sup>Required</sup> <a name="PreconfiguredUllDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomain"></a>

```csharp
public string PreconfiguredUllDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesMulticastDomainUllMulticastDomain InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a>

---



